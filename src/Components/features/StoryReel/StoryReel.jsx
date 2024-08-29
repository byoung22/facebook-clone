import React, { useRef, useState } from 'react';
import './StoryReel.css';
import Story from './Story';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useStateValue } from '../../../StateProvider';

function StoryReel() {
    const scrollRef = useRef(null);
    const [onLeftEdge, setOnLeftEdge] = useState(true);
    const [{ user }, dispatch] = useStateValue();

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
                    profileSrc="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-1/434484741_10229314313101088_7830406819041488636_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=7pciP6xZOjIQ7kNvgEYJQjC&_nc_ht=scontent-sjc3-1.xx&oh=00_AYCP2YqsSZP7ojNXmGEVwKqLNk1yWO_OUdB4nOWlXkaBQA&oe=66D5A12A"
                    title="Bailey Young"
                ></Story>
                <Story
                    image="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fa10ad9fc-133b-4632-9b97-369515f89dac.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
                    profileSrc="https://seeklogo.com/images/F/financial-times-corporate-logo-1D9DF9C0BC-seeklogo.com.png"
                    title="Financial Times"
                ></Story>
                <Story
                    image="https://imageio.forbes.com/specials-images/imageserve/60651195f9cbabbea2d346d1/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                    profileSrc="https://e7.pngegg.com/pngimages/159/759/png-clipart-thomson-reuters-corporation-sales-business-vend-thomson-reuters-corporation-reuters.png"
                    title="Reuters"
                ></Story>
                <Story
                    image="https://cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/RIK25RQNQL4OPHO5U4AZJ35FD4.jpg"
                    profileSrc="https://www.fintechfutures.com/files/2023/03/SVBLogo-1-1.jpg"
                    title="Silicon Valley Bank"
                ></Story>
                <Story
                    image="https://i.dailymail.co.uk/1s/2023/03/11/23/68592653-11849049-image-a-10_1678576118473.jpg"
                    profileSrc="https://mms.businesswire.com/media/20220217005369/en/1062126/4/First_Republic_centered%2C_3-26-21.jpg"
                    title="First Republic Bank"
                ></Story>
                <Story
                    image="https://image.cnbcfm.com/api/v1/image/107209822-1678969134573-gettyimages-1248369403-SWITZERLAND_CREDIT_SUISSE.jpeg?v=1680595260"
                    profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo-PLHbOcrtWERP3DBv0DHkaP9DLZZJdt2kg&s"
                    title="Credit Suisse"
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
