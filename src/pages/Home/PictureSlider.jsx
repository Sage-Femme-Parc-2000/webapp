
import SmartSlider from "react-smart-slider";
import Picture1 from '../../assets/img/1.avif'
import Picture2 from '../../assets/img/2.jpg'
import Picture3 from '../../assets/img/3.jpg'
import {Stack} from "@mui/material";

export default function PictureSlider() {

    const slidesArray = [
        {url: Picture1},
        {url: Picture2},
        {url: Picture3},
    ];

    return (
        <Stack borderRadius={'10px'} boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}>
            <SmartSlider height={500} slides={slidesArray} autoSlide={true} autoSlideInterval={4000} />
        </Stack>
    );
}
