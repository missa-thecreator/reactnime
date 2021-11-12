import React from 'react';
import {ScrollView} from "react-native";

import {Container, SearchContainer, Input, SearchButton, Title, BannerButton, Banner, SliderMovie} from "./styles";
import {Feather} from "@expo/vector-icons";
import Header from "../../components/Header"
import SliderItem from "../../components/SliderItem";


function Home() {
    return (
        <Container>
            <Header title="ReactNime"/>
            <SearchContainer>
                <Input
                    placeholder="Ex: Miss Kobayashi's Dragon Maid"
                    placeholderTextColor="#ddd"
                />
                <SearchButton>
                    <Feather name="search" size={30} color="#FFF"/>
                </SearchButton>
            </SearchContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Animes</Title>

                <BannerButton activeOpacity={0.9} onPress={() => alert('Me mama Black')}>
                   <Banner
                       resizeMode ="repeat"
                       source={require('../../assets/Home/konosuba.jpg')}/>
                </BannerButton>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={({item}) => <SliderItem/>}
                />

                <Title>Populares</Title>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={({item}) => <SliderItem/>}
                />

                <Title>Últimos Enviados</Title>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={({item}) => <SliderItem/>}
                />
            </ScrollView>
        </Container>
    )
}
export default Home;