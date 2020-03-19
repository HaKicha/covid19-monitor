import React from 'react';
import styled, {css} from 'styled-components';
import { Router, Route, Switch } from 'react-router';
import MapRenderer from "@/components/map/MapRenderer";
import {createBrowserHistory} from "history";
import LargeMonitorView from "@/components/LargeMonitorView";
const history = createBrowserHistory();

const App = () => (
    <Router history={history}>
        <Switch>
            <Route exact path={'/'} component={LargeMonitorView} />
        </Switch>
    </Router>

);

export default App;

const Content = styled.div`
    overflow-y: auto;
    min-height: calc(100vh - 50px);
    background: #fff;
    ${props => props.dark && css`
      filter: brightness(80%);
`}
`;
