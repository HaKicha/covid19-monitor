import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import ImageGallery from 'react-image-gallery';

const PostView = ({post}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <Container>
            <Header>{post.title}</Header>
            <ImageGallery
                items={post.imageReferences}
                renderItem={item => <Image src={item.url}/>}
                infinite={false}
                lazyLoad={true}
                showNav={post.imageReferences.length > 1}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
            />
            <Content active={isActive} onClick={() => setIsActive(!isActive)}>{post.text}</Content>
            {!isActive && <ShowMoreLabel onClick={() => setIsActive(!isActive)}>show more</ShowMoreLabel>}
        </Container>
    )
}

export default PostView;

const Header = styled.b`
    font-size: 12pt;
    margin: 5px 0;
    cursor: default;
`;

const Container = styled.div`
    display: grid;
    width: 100%;
    margin-bottom: 20px;
`;

const Image = styled.img`
    width: 100%;
    object-fit: contain;
`;

const Content = styled.p`
    width: 100%;
    cursor: default;
    ${props => !props.active && css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
        margin-bottom: 0;
    `}
`;

const ShowMoreLabel = styled.span`
    color: #999;
    cursor: pointer;
    &:hover {
        color: #745aff;
    }
`;
