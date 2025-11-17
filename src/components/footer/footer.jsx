import styled from "styled-components";
import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #111;
  color: #fff;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`;

const FooterBrand = styled.h3`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const SectionsWrapper = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
`;

const SectionLink = styled.a`
  color: #ccc;
  font-size: 18px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: #fff;
    transform: translateY(-3px);
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ccc;
  text-decoration: none;
  font-size: 18px;
  transition: 0.3s;

  svg {
    font-size: 22px;
    color: #ED3058;
  }

  &:hover {
    color: #fff;
    transform: translateY(-3px);
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 900px;
  height: 1px;
  background-color: #333;
`;

const Copyright = styled.p`
  font-size: 15px;
  color: #777;
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterContainer>

      <FooterBrand>THE SPOT</FooterBrand>

      <SectionsWrapper>
        <SectionLink href="#sobre">Sobre</SectionLink>
        <SectionLink href="#vantagens">Vantagens</SectionLink>
        <SectionLink href="#seguranca">Segurança</SectionLink>
        <SectionLink href="#localizacao">Localização</SectionLink>
      </SectionsWrapper>

      <LinksWrapper>

        <FooterLink
          href="https://www.instagram.com/residencialthespot/"
          target="_blank"
        >
          <FaInstagram />
          Instagram
        </FooterLink>

        <FooterLink href="tel:01633291710">
          <FaPhoneAlt />
          (16) 3329-1710
        </FooterLink>

        <FooterLink
          href="https://www.google.com/maps?q=R.+Alfredo+Benzoni,+3+-+Iguatemi,+Ribeir%C3%A3o+Preto+-+SP,+14091-520"
          target="_blank"
        >
          <FaMapMarkerAlt />
          Localização
        </FooterLink>

      </LinksWrapper>

      <Divider />

      <Copyright>
        © {new Date().getFullYear()} Residencial The Spot — Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
};
