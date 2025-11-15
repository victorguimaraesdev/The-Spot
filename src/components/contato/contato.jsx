import styled from "styled-components";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  padding: 70px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  background-color: #f7f7f7;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #E1306C;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
`;

const ContactItem = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 20px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  font-size: 20px;
  color: #222;
  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }

  svg {
    font-size: 28px;
    color: #E1306C;
  }
`;

export const Contato = ()  => {
  return (
    <Container>
      <Title>Contato</Title>

      <ContactList>

        <ContactItem
          href="https://www.instagram.com/residencialthespot/"
          target="_blank"
        >
          <FaInstagram />
          @residencialthespot
        </ContactItem>

        <ContactItem href="tel:01633291710">
          <FaPhoneAlt />
          (16) 3329-1710
        </ContactItem>

      </ContactList>
    </Container>
  );
}
