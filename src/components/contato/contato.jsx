import styled from "styled-components";
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

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
  text-align: center;
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

const MessageBox = styled.textarea`
  width: 100%;
  max-width: 500px;
  min-height: 130px;
  border-radius: 12px;
  padding: 15px;
  font-size: 18px;
  border: 1px solid #ddd;
  resize: none;
  outline: none;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);

  &:focus {
    border-color: #E1306C;
  }
`;

const WhatsButton = styled.button`
  width: 100%;
  max-width: 500px;
  padding: 18px;
  background: #25D366;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: 0.3s;

  &:hover {
    background: #1ebe5d;
    transform: translateY(-4px);
  }

  svg {
    font-size: 26px;
  }
`;

const Msg = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #E1306C;
  text-align: center;
`

export const Contato = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const phone = "5516999999999"; 

    const finalMsg = `Olá! Vim pelo site do The Spot. Minha mensagem é: ${message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(finalMsg)}`;

    window.open(url, "_blank");
  };

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
      <Msg>Fale Conosco</Msg>
      <MessageBox
        placeholder="Escreva sua mensagem para a equipe..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <WhatsButton onClick={handleSendMessage}>
        <FaWhatsapp />
        Enviar para WhatsApp
      </WhatsButton>
    </Container>
  );
};
