import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    overflow: hidden;
`;
const Img = styled.img`
    width: 100%;
    height: auto;
`;

export const Banner = () => {
    return (
        <Container>
            <Img src="assets/img1.jpg" alt="Banner" />
        </Container>
    );
};