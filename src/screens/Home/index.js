import React from 'react';

import {Container, SearchContainer, Input, SearchButton} from "./styles";
import {Feather} from "@expo/vector-icons";
import Header from "../../components/Header"

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
        </Container>
    )
}
export default Home;