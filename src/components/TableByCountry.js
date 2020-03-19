import React from 'react';
import {inject, observer} from "mobx-react";
import styled from 'styled-components';

const TableByCountry = inject('mapService')(observer(({mapService}) => {
    return <Container>
        <Table>
            <thead>
                <tr>
                    <td>Location</td>
                    <td>Confirmed</td>
                    <td>Recovered</td>
                    <td>Current</td>
                    <td>Deaths</td>
                </tr>
            </thead>
            <tbody>
                {mapService.data.map(el => <tr>
                    <td>{el.region ? el.region + ', ' + el.country : el.country}</td>
                    <td>{el.confirmed}</td>
                    <td>{el.recovered}</td>
                    <td>{(el.confirmed - el.recovered) - el.deaths}</td>
                    <td>{el.deaths}</td>
                </tr>)}
            </tbody>
        </Table>
    </Container>
}))

export default TableByCountry;

const Container = styled.div`
    display: block;
    flex-direction: column;
    height: 100vh;
    overflow-y: auto;
    position: absolute;
    top: 0;
    left: 50px;
    bottom: 0;
    width: max-content;
    max-width: calc(100% - 50px);
    background: #fff;
    z-index: 100;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    
    td {
        padding: 3px 2px;
    }
    
    td:nth-child(3) {color: green}
    td:nth-child(4) {color: #000580}
    td:nth-child(5) {color: darkred}
    
    thead td{
        border-bottom: 1px solid black;
    }
    tr:nth-child(2n){
        background: rgba(199,193,226,0.28);
    }
`;
