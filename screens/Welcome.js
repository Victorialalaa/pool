import React, {useState} from 'react';

import {
    StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageTitle, 
    SubTitle, 
    StyledFormArea, 
    StyledInputLabel, 
    StyledTextInput, 
    StyledButton,
    ButtonText,
    Colors,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/styles';
import {View} from 'react-native';

//colors
const {brand, darkLight} = Colors;

const Welcome = ({navigation}) => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageTitle>WELCOME!</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
};

export default Welcome;