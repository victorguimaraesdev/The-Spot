import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #ec3058;
  font-weight: bold;
`;

const Address = styled.p`
  font-size: 20px;
  color: #555;
  text-align: center;
`;

const MapWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export const Localizacao = () => {
  return (
    <Container id="localizacao">
      <Title>Localização</Title>

      <Address>
        R. Alfredo Benzoni, 3 — Iguatemi, Ribeirão Preto — SP, 14091-520
      </Address>

      <MapWrapper>
        <iframe
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.829865345537!2d-47.85142512466978!3d-21.22082968048353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf7baf3a59d7%3A0xff3f1a82f0a73b47!2sR.%20Alfredo%20Benzoni%2C%203%20-%20Iguatemi%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014091-520!5e0!3m2!1spt-BR!2sbr!4v1731610000000"
        ></iframe>
      </MapWrapper>
    </Container>
  );
}
