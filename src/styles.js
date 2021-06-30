import { Link, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { BsPlusSquare } from "react-icons/bs";
import { HiTemplate } from "react-icons/hi";

export const GolbalStyle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor}
}
`;

export const BsPlusSquareStyled = styled(BsPlusSquare)`
  color: ${(props) => props.theme.mainColor};
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;
export const HiTemplateStyled = styled(HiTemplate)`
  color: ${(props) => props.theme.mainColor};
  display: flex;
  width: 50px;
  height: auto;
  margin-bottom: 20px;
`;

export const UpdateButtonStyled = styled.p`
  color: grey;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
`;

export const NavProduct = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: black;
  }
`;

export const Logo = styled(Link)`
  padding: 10px;
  img {
    width: 100px;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const SubTitle = styled.h3`
  text-align: center;
`;
export const SubTitle1 = styled.p`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border-radius: 10px;
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, auto);
  }
  @media only screen and (max-width: 450px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const ProductWrapper = styled.div`
  margin: 20px;
`;

export const ImageSize = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 10px;
`;

export const ThemeButton = styled.button`
  margin: 20px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
  width: 10%;
  height: 100%;
  border-radius: 5px;
  font-size: 15px;
  text-align: center;
  font-weight: 600;
`;

export const SearchBarStyled = styled.input`
  width: 50%;
  align: center;
  text-align: center;
  display: block;
  margin-right: auto;
  margin-left: auto;
  height: 25px;
  margin-top: 10px;
`;

export const ProductDetails = styled.div`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 40%;
  h1 {
    text-align: center;
  }
  img {
    height: 250px;
    width: 250px;
    float: left;
    margin-right: 25px;
    border-radius: 10px;
  }
  p {
    ${"" /* text-align: left; */}
    vertical-align: middle:
  }
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.buttonColor};
  text-align: center;
  font-weight: 500;
  cursor: pointer;
`;
