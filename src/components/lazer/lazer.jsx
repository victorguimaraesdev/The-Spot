import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 500px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TextBox = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #ED3058;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #444;
  text-align: justify;
`;

export const Lazer = () => {
  return (
    <Container id="lazer">
      <Wrapper>
        <Image src="assets/img5.jpg" alt="Área de lazer com piscina do The Spot" />

        <TextBox>
          <Title>Área de Lazer</Title>
          <Description>
            A área de lazer do The Spot foi cuidadosamente planejada para 
            oferecer momentos únicos de relaxamento e diversão. Com uma 
            piscina ampla e solarium aconchegante, é o ambiente perfeito 
            para aproveitar os dias ensolarados em família.

            Além da piscina, o espaço conta com área gourmet equipada e 
            playground infantil, proporcionando entretenimento para todas 
            as idades. Cada detalhe foi pensado para garantir conforto, 
            segurança e bem-estar aos moradores.

            Viva experiências memoráveis sem sair de casa, em um ambiente 
            que combina sofisticação e qualidade de vida em cada momento.
          </Description>
        </TextBox>
      </Wrapper>
    </Container>
  );
};