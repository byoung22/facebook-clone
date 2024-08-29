import React, { useRef, useState } from 'react';
import './StoryReel.css';
import Story from './Story';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function StoryReel() {
    const scrollRef = useRef(null);
    const [onLeftEdge, setOnLeftEdge] = useState(true);

    const scroll = direction => {
        const { current } = scrollRef;

        if (current) {
            if (direction == 'left') {
                current.scrollBy({ left: -300, behavior: 'smooth' });
                setOnLeftEdge(true);
            } else {
                current.scrollBy({ left: 300, behavior: 'smooth' });
                setOnLeftEdge(false);
            }
        }
    };

    return (
        <div className="storyReel">
            {!onLeftEdge && (
                <button
                    className="storyReel__arrow storyReel__arrowLeft"
                    onClick={() => scroll('left')}
                >
                    <ArrowBackIosNewIcon />
                </button>
            )}
            <div className="storyReel__container" ref={scrollRef}>
                <Story
                    image="https://www.ft.com/__origami/service/image/v2/images/raw/https://d1e00ek4ebabms.cloudfront.net/production/4fbb661f-97e4-49fc-be36-90282c7b2743.jpg?source=next-barrier-page"
                    profileSrc="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-1/434484741_10229314313101088_7830406819041488636_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=100&ccb=1-7&_nc_sid=6738e8&_nc_ohc=VQoHC50xpmkQ7kNvgFumS_N&_nc_ht=scontent-lax3-2.xx&oh=00_AYB7krpTDbr0u1ARWKt2Pzp9dyLFdtgHQlDgDDLxGuY1Ww&oe=66CC2E6A"
                    title="Bailey Young"
                ></Story>
                <Story
                    image="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fa10ad9fc-133b-4632-9b97-369515f89dac.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
                    profileSrc="https://seeklogo.com/images/F/financial-times-corporate-logo-1D9DF9C0BC-seeklogo.com.png"
                    title="Financial Times"
                ></Story>
                <Story
                    image="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fa10ad9fc-133b-4632-9b97-369515f89dac.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
                    profileSrc="https://seeklogo.com/images/F/financial-times-corporate-logo-1D9DF9C0BC-seeklogo.com.png"
                    title="Financial Times"
                ></Story>
                <Story
                    image="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fa10ad9fc-133b-4632-9b97-369515f89dac.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
                    profileSrc="https://seeklogo.com/images/F/financial-times-corporate-logo-1D9DF9C0BC-seeklogo.com.png"
                    title="Financial Times"
                ></Story>
                <Story
                    image="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fa10ad9fc-133b-4632-9b97-369515f89dac.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
                    profileSrc="https://seeklogo.com/images/F/financial-times-corporate-logo-1D9DF9C0BC-seeklogo.com.png"
                    title="Financial Times"
                ></Story>
                <Story
                    image="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fa10ad9fc-133b-4632-9b97-369515f89dac.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
                    profileSrc="https://seeklogo.com/images/F/financial-times-corporate-logo-1D9DF9C0BC-seeklogo.com.png"
                    title="Financial Times"
                ></Story>
            </div>
            {onLeftEdge && (
                <button
                    className="storyReel__arrow storyReel__arrowRight"
                    onClick={() => scroll('right')}
                >
                    <ArrowForwardIosIcon />
                </button>
            )}
        </div>
    );
}

export default StoryReel;
