import { useState } from 'react';
import  { faqData } from '../../data/faq';
import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';
import { Title } from 'components/Title/Title.styled';
import {
  FaqAnsver,
  FaqButton,
  FaqImg,
  FaqList,
  FaqListItem,
  FaqQuestion,
  FaqQuestionWrapper,
} from './FAQ.styled';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <Section id="faq">
      <Container>
        <Title>FAQ</Title>
        <FaqList>
          {faqData.map((item, index) => (
            <FaqListItem
              key={index}
              $active={openIndex === index ? 'active' : 'not active'}
            >
              <FaqImg
                src={item.image}
                alt="Apes view"
                $active={openIndex === index ? 'active' : 'not active'}
                loading="lazy"
              />
              <FaqButton
                type="button"
                aria-label="Toggle answer"
                onClick={() => handleToggle(index)}
                $active={openIndex === index ? 'active' : 'not active'}
              >
                {item.queue}
              </FaqButton>
              <FaqQuestionWrapper>
                <FaqQuestion onClick={() => handleToggle(index)}>
                  {item.question}
                </FaqQuestion>
                {openIndex === index && <FaqAnsver>{item.answer}</FaqAnsver>}
              </FaqQuestionWrapper>
            </FaqListItem>
          ))}
        </FaqList>
      </Container>
    </Section>
  );
}

export default FAQ;