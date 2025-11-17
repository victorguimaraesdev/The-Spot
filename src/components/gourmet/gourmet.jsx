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

export const Gourmet = () => {
  return (
    <Container id="gourmet">
      <Wrapper>
        <Image src="assets/img5.jpg" alt="Área gourmet do The Spot" />

        <TextBox>
          <Title>Área Gourmet</Title>
          <Description>
            A área gourmet do The Spot foi projetada para oferecer um ambiente
            sofisticado e acolhedor, ideal para momentos únicos com amigos e
            familiares.  
            Com design moderno, acabamento de alto padrão e espaço amplo,
            integra praticidade e elegância em cada detalhe. 

            Perfeita para confraternizações, celebrações ou encontros
            informais, a área gourmet proporciona conforto, estilo e uma
            experiência completa dentro do próprio condomínio — tudo para que
            você viva o melhor de Ribeirão Preto com qualidade e exclusividade.
          </Description>
        </TextBox>
      </Wrapper>
    </Container>
  );
};
