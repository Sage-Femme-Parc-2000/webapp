
import MEMBER_LIST from "../../datas/TeamData";

import MapLocation from "../../components/MapLocation/MapLocation";
import PicturesSlider from "../../components/PicturesSlider/PicturesSlider";

import {Chip, Divider, Stack, Avatar, Typography, useMediaQuery} from "@mui/material";

export default function Home() {

    const dividerStyle = {
        "&::before, &::after": {borderColor: "secondary.main",},
    }

    return (
        <Stack component={'section'} gap={4}>
            <PicturesSlider />
            <Divider sx={dividerStyle}>
                <Chip label='Notre équipe !' color='secondary' sx={{fontSize: '15px'}}/>
            </Divider>
            <TeamCard/>
            <Divider sx={dividerStyle}>
                <Chip label='Où nous trouver ?' color='secondary' sx={{fontSize: '15px'}}/>
            </Divider>
            <MapLocation />
        </Stack>
    );
}

function TeamCard() {
    const isDesktop = useMediaQuery('(min-width:800px)');

    return (
        <Stack flexDirection='row' flexWrap={isDesktop ? 'none' : 'wrap'} justifyContent={'center'} gap={2}>
            {MEMBER_LIST.map(member =>
                <Stack
                    key={'Member' + member.name}
                    width={isDesktop ? '100%' : '45%'}
                    alignItems={'center'}
                    backgroundColor={'white'}
                    borderRadius={'10px'}
                    boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}
                >
                    <Avatar variant="rounded" src={member.img} sx={{ width: '100%', height: 200 }} />
                    <Stack p={2} alignItems={'center'} justifyContent={'center'} height={'100%'}>
                        <Typography color={'secondary'} fontSize={'18px'} fontWeight={'bold'} textAlign='center' fontFamily={'Quicksand'}>
                            {member.firstname} {member.name}
                        </Typography>
                    </Stack>
                </Stack>
            )}
        </Stack>
    );
}