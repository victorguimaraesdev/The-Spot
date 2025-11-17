import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 100px 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 900px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 30px;
  }
`;

const Image = styled.img`
  width: 480px;
  height: auto;
  border-radius: 22px;
  object-fit: cover;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const H1 = styled.h1`
  font-size: 42px;
  color: #ec3058;
  margin-bottom: 10px;
  font-weight: 800;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const P = styled.p`
  font-size: 20px;
  line-height: 1.7;
  color: #444;
  font-weight: 400;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: left;
  }
`;

export const About = () => {
  return (
    <Container id="about">
      <Content>

        <TextBlock>
          <H1>Sobre o The Spot</H1>

          <P>
            O <strong>The Spot</strong>, localizado em uma região estratégica de 
            <strong> Ribeirão Preto</strong>, é um condomínio moderno projetado para quem busca 
            praticidade e conforto no dia a dia.
          </P>

          <P>
            Com infraestrutura completa, ambientes planejados e áreas de lazer pensadas 
            para convivência e bem-estar, o empreendimento oferece tudo o que a vida 
            contemporânea exige.
          </P>

          <P>
            Com design atual e <strong>segurança 24 horas</strong>, o The Spot é a escolha ideal 
            para quem deseja morar ou investir com qualidade de vida em um único lugar.
          </P>
        </TextBlock>

        <Image src="assets/img4.jpg" alt="Imagem do The Spot" />
      </Content>
    </Container>
  );
};
