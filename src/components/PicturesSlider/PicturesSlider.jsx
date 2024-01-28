import { useEffect, useState } from 'react';

import {ArrowBackIosRounded, ArrowForwardIosRounded, Circle} from "@mui/icons-material";
import {Stack, useMediaQuery} from "@mui/material";

import Picture1 from "../../assets/img/1.avif";
import Picture2 from "../../assets/img/2.jpg";
import Picture3 from "../../assets/img/3.jpg";

const SliderData = [
    { image: Picture1 },
    { image: Picture2 },
    { image: Picture3 },
];

export default function PicturesSlider() {
    const isDesktop = useMediaQuery('(min-width:800px)');
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    useEffect(() => {
        const timeoutId = setTimeout(() =>
            setCurrent(current === length - 1 ? 0 : current + 1)
        , 5000);
        return () => clearTimeout(timeoutId);
    }, [current, length]);

    const ButtonStyle = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        zIndex: 10,
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': { backgroundColor: '#00000056'}
    };

    return (
        <Stack height={isDesktop ? 500 : 300} position='relative' justifyContent={'center'} alignItems={'center'} borderRadius={isDesktop ? '10px' : 0} overflow={'hidden'}>
            {SliderData.length > 0 && (
                <>
                    <Stack left={0} sx={ButtonStyle} onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}>
                        <ArrowBackIosRounded sx={{ zIndex: 100, fontSize: '3rem', color: 'white'}} />
                    </Stack>
                    <Stack right={0} sx={ButtonStyle} onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}>
                        <ArrowForwardIosRounded sx={{ zIndex: 100, fontSize: '3rem', color: 'white'}} />
                    </Stack>
                    <Stack
                        flexDirection='row' justifyContent={'center'} alignItems={'center'} gap={1}
                        height={'50px'}
                        zIndex={10}
                        position='absolute' bottom={0} left={0} right={0}
                    >
                        {SliderData.map((_, index) =>
                            <Circle
                                key={'DotPicture ' + index}
                                onClick={() => setCurrent(index)}
                                sx={{color: index === current ? '#00000056' : 'white', fontSize: '1.15rem', cursor: 'pointer'}}
                            />
                        )}
                    </Stack>

                    {SliderData.map((slide, index) => (
                        <Stack
                            key={index}
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={index === current
                                ? { opacity: 1, transitionDuration: '1s', transform: 'scale(1.05)' }
                                : { opacity: 0, transitionDuration: '1s ease' }
                            }
                        >
                            {index === current && (
                                <img src={slide.image} alt='travel image' style={{ width: '100%' }} />
                            )}
                        </Stack>
                    ))}
                </>
            )}
        </Stack>
    );
}