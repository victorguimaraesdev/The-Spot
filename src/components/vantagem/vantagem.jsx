import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 40px;
  color: #ec3058;
  margin-bottom: 50px;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  padding: 40px 20px;
  border-radius: 20px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  cursor: default;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconCircle = styled.div`
  width: 70px;
  height: 70px;
  background-color: #ec3058;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px auto;

  span {
    font-size: 32px;
    color: white;
    font-weight: bold;
  }
`;

const Text = styled.p`
  font-size: 18px;
  color: #444;
  font-weight: 500;
`;

export const Vantagem = () => {
  return (
    <Container>
      <Content>
        <Title>Vantagens de Morar no The Spot</Title>
        <Grid>
          <Card>
            <IconCircle>
              <span>1</span>
            </IconCircle>
            <Text>Localização privilegiada — fica exatamente em frente à UNAERP.</Text>
          </Card>
          <Card>
            <IconCircle>
              <span>2</span>
            </IconCircle>
            <Text>Lazer completo e segurança 24 horas para sua tranquilidade.</Text>
          </Card>
          <Card>
            <IconCircle>
              <span>3</span>
            </IconCircle>
            <Text>Está pronto para morar ou investir — ideal para retorno rápido.</Text>
          </Card>
        </Grid>
      </Content>
    </Container>
  );
};
