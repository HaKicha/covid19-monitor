import nextId from "react-id-generator";

export default class CountryInfo {

    constructor(contract) {
        this.id = nextId();
        this.region = contract['Province/State'];
        this.country = contract['Country/Region'];
        this.update = contract['Last Update'];
        this.confirmed = contract['Confirmed'] - 0;
        this.deaths = contract['Deaths'] - 0;
        this.recovered = contract['Recovered'] - 0;
        this.lat = contract['Latitude'] - 0;
        this.lon = contract['Longitude'] - 0;
    }

}
