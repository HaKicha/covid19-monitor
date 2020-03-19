import React from 'react';
import {Map, MapView, GraphicsLayer} from "@/utils/ArcGisObjectFactory";
import {getDonutMarker} from "@/utils/ArcGisGraphicsFactory";
import {observable, action} from "mobx";

export default class MapService {

    map;
    view;
    @observable data = [];
    graphics = new GraphicsLayer();

    constructor(containerId) {
        this.flyToBuilding = this.flyToBuilding.bind(this);
        this.removeMarker = this.removeMarker.bind(this);
        this.addMarker = this.addMarker.bind(this);
    }

    @action
    addData(obj) {
        if (obj.lat) {
            this.data.push(obj);
            this.addMarker(obj)
        }

    }

    init(containerId) {

        this.map = new Map({
            basemap: 'gray-vector'
        });

        this.view = new MapView({
            container: containerId,
            map: this.map,
            center: [30, 50],
            zoom: 4,
            constraints: {
                minZoom: 3,
                maxZoom: 8
            },
            popup: {
                dockEnabled: true,
                dockOptions: {
                    buttonEnabled: true,
                    breakpoint: false
                }
            }
        });

        this.map.add(this.graphics);

        this.view.ui.move("zoom", "bottom-right");
    }

    removeMarker(id) {

    }

    addMarker(countryInfo) {
        this.graphics.add(getDonutMarker(countryInfo));
    }

    flyToBuilding(building) {
    }
}
