import {Point, Popup, PopupTemplate, PictureMarker, Graphic} from '@/utils/ArcGisObjectFactory';
import DonutChartIcon from "@/components/map/DonutChartIcon";
import React from 'react';
import ReactDOMServer from 'react-dom/server';

export function getDonutMarker(contract) {
    const point = new Point({
            latitude: contract.lat,
            longitude: contract.lon
        });

    let size = Math.ceil(contract.confirmed / 10000 * 64);
    if (size < 36) size = 36;
    else if (size > 128) size = 128;

    const iconData = {
        sum: contract.confirmed,
        red: contract.deaths,
        yellow: (contract.confirmed - contract.deaths) - contract.recovered,
        green: contract.recovered
    }
    const icon = `data:image/svg+xml;base64,${window.btoa(ReactDOMServer.renderToStaticMarkup(<DonutChartIcon data={iconData}/>))}`

    const symbol = new PictureMarker({
        height: size + 'px',
        width: size + 'px',
        url: icon
    });


    const attributes = {
        Region: contract.region,
        Country: contract.country,
        Update: new Date(contract.update).toLocaleString(),
        Confirmed: contract.confirmed,
        Recovered: contract.recovered,
        Current: contract.confirmed - contract.deaths - contract.recovered,
        Deaths: contract.deaths
    }

    const template = new PopupTemplate({
        title: contract.region ? '{Region}, {Country}' : '{Country}',
        content: [{
            type: 'fields',
            fieldInfos: [{
                fieldName: 'Current',
                label: 'Хворих'
            },{
                fieldName: 'Recovered',
                label: 'Вилікувано'
            },{
                fieldName: 'Deaths',
                label: 'Померло'
            },{
                fieldName: 'Confirmed',
                label: 'Всього'
            },{
                fieldName: 'Update',
                label: 'Оновлено'
            }]
        }]
    });


    const marker = new Graphic({
        geometry: point,
        symbol: symbol,
        popupTemplate: template,
        attributes: attributes
    });

    return marker;
}
