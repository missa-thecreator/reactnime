import React from "react";

import {Container, BannerItem, Title, RateContainer, Rate} from "./styles";
import { Ionicons} from "@expo/vector-icons";

function SliderItem(){
    return(
     <Container activeOpacity={0.7}>
         <BannerItem
             source={require('../../assets/Home/Naruto.png')}
         />

         <Title numberOfLines={1}>Naruto Shippuden</Title>

         <RateContainer>
             <Ionicons name="md-star" size={12} color="#E7A74e"/>
             <Rate>9.4/10</Rate>
         </RateContainer>
     </Container>
    )
}

export default SliderItem;
