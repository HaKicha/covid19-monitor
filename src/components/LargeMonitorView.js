import React from 'react';
import MapRenderer from "@/components/map/MapRenderer";
import MainNewsVidget from "@/components/News/MainNewsVidget";
import Navigation from "@/components/Navigation";
import {observer, inject} from "mobx-react";
import TableByCountry from "@/components/TableByCountry";

const LargeMonitorView = inject('viewStore')(observer(({viewStore}) => {

    return (<>
            <MapRenderer/>
            {viewStore.currentView === 'news' && <MainNewsVidget />}
            {viewStore.currentView === 'home' && <TableByCountry />}
            <Navigation/>
        </>
    )
}))

export default LargeMonitorView;
