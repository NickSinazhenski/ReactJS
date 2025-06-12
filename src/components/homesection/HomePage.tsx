import React, { FC, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import {
  Container,
  ContainerContent,
  HeaderText,
  DescriptionText,
  OrderButton,
  RatingContainer,
  ImageSection,
  RatingText,
} from "./HomePage.styles";
import photo from "../../assets/homepagephoto.png";

const Home: FC = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  const handleOrderClick = useCallback(() => {
    if (user) {
      navigate("/order");
    } else {
      navigate("/login");
    }
  }, [user, navigate]);
    return (
      <Container>
        <ContainerContent>
          <HeaderText>
            Beautiful food & takeaway, <span>delivered</span> to your door.
          </HeaderText>
          <DescriptionText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500.
          </DescriptionText>
          <OrderButton onClick={handleOrderClick}>Place an Order</OrderButton>
          <RatingContainer>
          <div className="stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="partial">★</span>
          </div>
            <RatingText> <span>4.8 out of 5</span> based on 2000+ reviews</RatingText>
          </RatingContainer>
        </ContainerContent>
        <ImageSection>
        <img src={photo} alt="Burger and fries" />
        </ImageSection>
      </Container>
    );
  };
  
  export default Home;

  


    