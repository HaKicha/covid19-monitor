import React, {useEffect} from 'react';
import styled from 'styled-components';
import {mapService} from "@/index";
import {inject, observer} from "mobx-react";
import {getCountryData} from "@/api/CountryData";
import Papa from "papaparse";
import CountryInfo from "@/models/CountryInfo";

const MapRenderer = inject('mapService')(observer(({mapService}) => {

    useEffect(() => {
        mapService.init('map-container');

        getCountryData().then(data => {
            Papa.parse(data, {
                worker: true,
                header: true,
                step: res => mapService.addData(new CountryInfo(res.data))
            })
        });
    }, []);

    return <MapContainer id={'map-container'}/>
}));

export default MapRenderer;

const MapContainer = styled.div`
    height: 100vh;
    width: calc(100vw - 50px);
    margin-left: 50px;
`;
