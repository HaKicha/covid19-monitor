import React, {useEffect} from 'react';
import styled from 'styled-components';
import {firebaseService} from "@/index";
import {inject, observer} from "mobx-react";
import {Preloader, Puff} from "react-preloader-icon";
import PostView from "@/components/News/PostView";

const MainNewsVidget = inject('newsStore')(observer(({newsStore}) => {

    useEffect(() => {
        firebaseService.getPosts().then(posts => {
            posts.forEach(post => newsStore.addPost(post))
            newsStore.setIsLoading(false);
        })
    },[]);

    return (<Container>
        {newsStore.isLoading && <PreloaderContainer>
            <Preloader
            use={Puff}
            size={80}
            strokeWidth={10}
            strokeColor="#745aff"
            duration={5000}
            />
        </PreloaderContainer>
        }
        {!newsStore.isLoading && newsStore.posts.map(el => <PostView post={el}/>)}
    </Container>)
}))

export default MainNewsVidget;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: auto;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
        display: none;
    }
    position: absolute;
    top: 0;
    left: 50px;
    bottom: 0;
    width: 300px;
    background: #fff;
    z-index: 100;
`;

const PreloaderContainer = styled.div`
    display: grid;
    width: 100%;
    padding-top: 100px;
    justify-content: center;
`;
