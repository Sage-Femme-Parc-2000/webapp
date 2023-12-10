
import SmartSlider from "react-smart-slider";
import Picture1 from '../../assets/img/1.avif'
import Picture2 from '../../assets/img/2.jpg'
import Picture3 from '../../assets/img/3.jpg'
import {Stack, useMediaQuery} from "@mui/material";

export default function PictureSlider() {
    const isDesktop = useMediaQuery('(min-width:800px)');

    const slidesArray = [
        {url: Picture1},
        {url: Picture2},
        {url: Picture3},
    ];

    return (
        <Stack borderRadius={isDesktop ? '10px' : 0} overflow={'hidden'} boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}>
            <SmartSlider height={isDesktop ? 500 : 300} slides={slidesArray} autoSlide={true} autoSlideInterval={4000} />
        </Stack>
    );
}
