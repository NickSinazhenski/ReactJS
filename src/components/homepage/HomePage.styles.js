import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 1;
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f6fafa;
   clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 67%);
    z-index: -1;
  }
`;

export const ContainerContent = styled.div`
  max-width: 50%;
  padding-right: 10px;
`;

export const HeaderText = styled.h1`
  font-family: Inter;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 1.8px;
  span {
    color: #35B8BE;
  }
`;

export const DescriptionText = styled.p`
  color: #546285;
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  line-height: 24.12px;
  letter-spacing: 0.36px;


`;

export const OrderButton = styled.button`
  background-color: #35B8BE;
  color: white;
  padding: 19px 35px;
  border: none;
  margin-top: 2rem;
  width: 193;
  height: 60;
  border-radius: 6px; 
  font-family: Inter;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;


`;

export const RatingContainer = styled.div`
  margin-top: 1rem;
  color: #35B8BE;
  font-size: 1.2rem;
  .partial {
    background: linear-gradient(90deg, #35B8BE 70%, lightgray 30%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const RatingText = styled.p`
  color: #546285;
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  span {
    color: #35B8BE;
  }

`;

export const ImageSection = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
    

  }
`;