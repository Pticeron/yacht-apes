import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { omit } from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button,
    ErrorSpan,
    Form,
    Input,
    LabelDicrort,
    LabelWallet } from './ContactFopm.styled.jsx'


const schema = Yup.object().shape({
    username: Yup.string().required('Wrong discord'),
    walletaddress: Yup.string().required('Wrong address'),
  });

  function ContactForm() {
    const [username, setUsername] = useState(
      () => localStorage.getItem('username') || ''
    );
    const [walletaddress, setWalletaddress] = useState(
      () => localStorage.getItem('walletaddress') || ''
    );
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    useEffect(() => {
      localStorage.setItem('username', username);
      localStorage.setItem('walletaddress', walletaddress);
    }, [username, walletaddress]);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setErrors(prevErrors => omit(prevErrors, name));
  
      switch (name) {
        case 'username':
          setUsername(value);
          break;
        case 'walletaddress':
          setWalletaddress(value);
          break;
        default:
          return;
      }
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        await schema.validate({ username, walletaddress }, { abortEarly: false });
        toast.success(`Thank you, ${username} form submitted successfully!`);
        setUsername('');
        setWalletaddress('');
        setErrors({});
        setSubmitted(true);
      } catch (err) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      }
    };
  
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <LabelDicrort $hasError={!!errors.username ? 'error' : ''}>
            <Input
              type="text"
              name="username"
              placeholder="@USERNAME"
              value={username}
              onChange={handleChange}
              $hasError={!!errors.username ? 'error' : ''}
            />
            {errors.username && <ErrorSpan>{errors.username}</ErrorSpan>}
          </LabelDicrort>
          <LabelWallet $hasError={!!errors.walletaddress ? 'error' : ''}>
            <Input
              type="text"
              name="walletaddress"
              placeholder="WALLET ADDRESS"
              value={walletaddress}
              onChange={handleChange}
              $hasError={!!errors.walletaddress ? 'error' : ''}
            />
            {errors.walletaddress && (
              <ErrorSpan>{errors.walletaddress}</ErrorSpan>
            )}
          </LabelWallet>
          <Button type="submit" aria-label="Send">
            {submitted
              ? 'MINTED'
              : Object.keys(errors).length > 0
              ? 'ERROR'
              : 'MINT'}
          </Button>
        </Form>
        <ToastContainer theme="dark" />
      </>
    );
  }
  
  export default ContactForm;