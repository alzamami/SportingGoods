import styled, { createGlobalStyle } from "styled-components";

export const GolbalStyle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor}
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
  width: 5.5%;
  height: 35px;
  border-radius: 5px;
  font-size: 17.5px;
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
