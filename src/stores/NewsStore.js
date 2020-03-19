import {observable, action} from "mobx";

export default class NewsStore {

    @observable posts = [];
    @observable isLoading = true;

    @action setIsLoading(param){
        this.isLoading = param;
    }

    @action addPost(post){
        this.posts.unshift(post);
    }

}
