import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 450px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TextBlock = styled.div`
  flex: 1;
`;

const H1 = styled.h1`
    font-size: 40px;
    color: #ec3058; 
    margin-bottom: 20px;
    font-weight: 700;
`

const P = styled.p`
    font-size: 18px;
    line-height: 1.7;
    color: #444;
    font-weight: 400;
`

export const About = () => {
  return (
    <Container>
      <Content>
        <TextBlock>
          <H1>Sobre o The Spot</H1>
          <P>
            O The Spot é um empreendimento moderno, projetado para quem busca 
            praticidade, conforto e um ambiente que acompanha o ritmo da vida 
            contemporânea. Com infraestrutura completa, espaços inteligentes e 
            áreas pensadas para lazer, convivência e bem-estar, o The Spot une 
            design, segurança e funcionalidade em um único lugar.
          </P>
        </TextBlock>

        <Image src="assets/img4.jpg" alt="Imagem do The Spot" />
      </Content>
    </Container>
  );
};
