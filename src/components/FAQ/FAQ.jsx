import { useState } from 'react';
import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';
import { Title } from 'components/Title/Title.styled';
import FAQItem from './FAQItem';
import { faqData }  from '../data/faq';
import {
  FaqList,
  FaqListItem,
  } from './FAQ.styled';

function FAQ() {
  const [selectedCard, setSelectedCard] = useState(1);

  return (
    <Section id="faq">
      <Container>
        <Title>FAQ</Title>
        <FaqList>
          {faqData.map(({ id, title, description, image }) => (
            <FaqListItem
            key={id} onClick={() => setSelectedCard(id)}
            >
              <FAQItem
              active={selectedCard === id}
              id={id}
              title={title}
              description={description}
              image={image}
            />
            </FaqListItem>
          ))}
        </FaqList>
      </Container>
    </Section>
  );
}

export default FAQ;