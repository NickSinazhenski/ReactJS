import React from "react";
import {
  Container,
  ContainerContent,
  HeaderText,
  DescriptionText,
  OrderButton,
  RatingContainer,
  ImageSection,
  RatingText,
} from "./HomePage.styles.js";
import photo from "../../assets/homepagephoto.png";

const Home = () => {
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
          <OrderButton>Place an Order</OrderButton>
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