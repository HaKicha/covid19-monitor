import React from 'react';
import styled from "styled-components";
import {inject, observer} from "mobx-react";
import ICONS from "@/const/Icons";

const Navigation = inject('viewStore')(observer(({viewStore}) => {
    return (<Container>
        <Icon
            active={viewStore.currentView === 'home'}
            onClick={() => viewStore.toggleView('home')}
        >
            {ICONS.HOME}
        </Icon>
        <Icon
            active={viewStore.currentView === 'news'}
            onClick={() => viewStore.toggleView('news')}
        >
            {ICONS.NEWS}
        </Icon>
    </Container>)
}))

export default Navigation;

const Container = styled.div`
    display: grid;
    grid-auto-rows: 50px;
    width: 50px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: 10;
`;

const Icon = styled.div`
    height: 50px;
    width: 50px;
    padding: 8px;
    cursor: pointer;
    svg {
        height: 34px;
        width: 34px;
        fill: ${props => props.active ? '#436aff' : '#9b9b9b'};
    }
    svg:hover {
        fill: #745aff;
    }
    svg:active {
        fill: #3748ff;
    }
`;
