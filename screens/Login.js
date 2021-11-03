import React, {useState} from 'react';

// formik
import {Formik} from 'formik';

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

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

const Login = ({navigation}) => {
    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <InnerContainer>
                <PageTitle>Pool App</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("MainContainer");
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        <MyTextInput
                            label="Email Address"
                            placeholder="@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            values={values.email}
                            keyboardType="email-address"
                        />

                        <MyTextInput
                            label="Password"
                            placeholder="shhhhhhh"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            values={values.password}
                            secureTextEntry={true}
                            isPassword={true}
                        />
                        
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Login
                            </ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Don't have an account already? </ExtraText>
                            <TextLink onPress={() => navigation.navigate("Signup")}>
                                <TextLinkContent>Signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, ...props}) => {
    return (
        <View>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
        </View>
    );
};

export default Login;