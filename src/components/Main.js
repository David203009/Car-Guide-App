import React from "react";
import { Text, View } from "react-native";
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryScreen from './Entry';
import RegisterScreen from './Register';
import LoginScreen from "./Login";
import HomeScreens from "./Home";
import LanguageSelector from "./Language";
import UserProfile from "./Profile";
import EditProfile from "./EditProfile";
import CarList from "./Cars";
import RegisterCar from "./RegisterCar";
import ContactForm from "./Contact";
import AboutComponent from "./AboutUs";
import CarDetails from "./CarDetail";
import ChatComponent from "./Chat";
import TechnicalGuideComponent from "./TechnicalGuide";
import ArticleComponent from "./Articles";
import QuestionsComponent from "./Questions";
import WorkerProfile from "./WorkerProfile";
import PremiumPlansScreen from "./Premium";

const Stack = createNativeStackNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            {/* <MyDrawer /> */}
            <Stack.Navigator initialRouteName="Entry">
                <Stack.Screen name="Entry" component={EntryScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{title: "Log In"}}/>
                <Stack.Screen name="Register" component={RegisterScreen} options={{title: "Registro"}}/>
                <Stack.Screen name="Home" component={HomeScreens} options={{ headerShown: false }}  />
                <Stack.Screen name="Language" component={LanguageSelector}  options={{title: "Idioma"}}/>
                <Stack.Screen name="Profile" component={UserProfile}  options={{title: "Perfil"}}/>
                <Stack.Screen name="EditProfile" component={EditProfile}  options={{title: "Editar Perfil"}}/>
                <Stack.Screen name="Cars" component={CarList} options={{title: "Vehiculos"}} />
                <Stack.Screen name="RegisterCar" component={RegisterCar}  options={{title: "Registro de Vehiculos"}}/>
                <Stack.Screen name="Contact" component={ContactForm}  options={{title: "Contacto"}}/>
                <Stack.Screen name="AboutUs" component={AboutComponent} options={{title: "Sobre Nosotros"}}  />
                <Stack.Screen name="CarDetail" component={CarDetails} options={{title: "Modelos"}} />
                <Stack.Screen name="Chat" component={ChatComponent} options={{title: "Nuevo Chat"}} />
                <Stack.Screen name="TechnicalGuide" component={TechnicalGuideComponent} options={{title: "Guia Tecnica"}} />
                <Stack.Screen name="Article" component={ArticleComponent} options={{title: "Articulos de Mantenimiento"}} />
                <Stack.Screen name="FAQs" component={QuestionsComponent} options={{title: "Preguntas Frecuentes"}} />
                <Stack.Screen name="Worker" component={WorkerProfile} options={{title: "Perfil del Trabajador"}} />
                <Stack.Screen name="Premium" component={PremiumPlansScreen} options={{title: "Obten Premium"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


