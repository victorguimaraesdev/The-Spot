import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    margin-top: 70px;
`;

const ContainerImg = styled.div`
    position: relative;
    width: 100%;
    display: inline-block;
`;

const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    pointer-events: none;
`;

const Img = styled.img`
    width: 100%;
    display: block;
`;

const TextContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #ffffff;
    padding: 20px;
    z-index: 2;
    width: 90%;
`;

const Logo = styled.img`
  width: 700px;
  height: auto;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const Banner = () => {
    return (
        <Container>
            <ContainerImg>
                <Overlay />
                <Img src="assets/img3.png" alt="Banner" />
                <TextContent>
                    <Logo src="assets/logo2.png" alt="Logo" />
                </TextContent>
            </ContainerImg>
        </Container>
    );
};
