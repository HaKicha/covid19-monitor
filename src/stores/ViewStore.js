import {observable, action} from "mobx";

export default class ViewStore {

    @observable currentView = 'map';

    @action toggleView(view) {
        if (this.currentView === view) this.currentView = '';
        else this.currentView = view;
    }

}
