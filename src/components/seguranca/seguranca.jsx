import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 60px 20px;
  background-color: #0a0a0a;
  color: #ffffff;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #ED3058;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #e6e6e6;
  text-align: justify;
`;

export const Seguranca = () => {
  return (
    <Container id="seguranca">
      <Content>
        <Title>Segurança 24h para sua tranquilidade</Title>

        <Text>
          No The Spot, segurança não é apenas um diferencial — é prioridade. 
          Todo o condomínio conta com monitoramento por câmeras, controle 
          rigoroso de acesso e equipe de vigilância disponível 24 horas por dia.
        </Text>

        <Text>
          Você e sua família podem viver com tranquilidade todos os dias, sabendo 
          que o ambiente foi planejado para oferecer proteção, conforto e bem-estar.
        </Text>

        <Text>
          Seja para morar ou investir, contar com um condomínio seguro agrega 
          ainda mais valor e qualidade ao seu patrimônio.
        </Text>
      </Content>
    </Container>
  );
}
