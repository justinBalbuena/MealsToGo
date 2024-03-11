import * as React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';


const RestaurantCard = styled(Card)`
backgroundColor: 'white';
`;

const RestaurantCardCover = styled(Card.Cover)`
padding: 16px;
backgroundColor: 'white';
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;


export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;


  return (
    <Card elevation={5} >
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Title>
        {name}
      </Title>
    </Card>


  );
};