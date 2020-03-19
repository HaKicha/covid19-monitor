import './config';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './app/App';
import 'arcgis-js-api/themes/light/main.css'
import {lightTheme} from "./styles/Theme";
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from "@/styles/GlobalStyle";
import MapService from "@/services/MapService";
import {FirebaseService} from "@/services/firebaseService";
import ViewStore from "@/stores/ViewStore";
import NewsStore from "@/stores/NewsStore";

const mapService = new MapService();
const firebaseService = new FirebaseService();
const viewStore = new ViewStore();
const newsStore = new NewsStore();

export {
    firebaseService,
    mapService
}

const stores = {
    mapService,
    viewStore,
    newsStore
};

ReactDOM.render(
    <Provider {...stores}>
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

