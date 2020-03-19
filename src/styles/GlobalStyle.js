import {createGlobalStyle} from 'styled-components';

const GlobalStyles  = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        overflow: hidden;
    }

    .esri-component.esri-attribution.esri-widget {
        display: none;
    }

      .esri-popup__main-container.esri-widget.esri-popup--shadow.esri-popup--is-collapsible {
          z-index: 1000;
      }
    
`;

export {
    GlobalStyles
}
