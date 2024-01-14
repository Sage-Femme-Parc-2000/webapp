
import MapLocation from "../Home/MapLocation";

import {Avatar, Button, Stack, Typography, Link, useMediaQuery, Divider} from "@mui/material";
import {PhoneRounded} from "@mui/icons-material";

import Picture1 from '../../assets/img/team/team1Picture.jpg'
import Picture2 from '../../assets/img/team/team2Picture.jpg'
import Picture3 from '../../assets/img/team/team3Picture.jpg'
import Picture4 from '../../assets/img/team/team4Picture.jpg'

export default function Contact() {
    const isDesktop = useMediaQuery('(min-width:800px)');

    const memberList = [
        {name: 'Edwards', firstname: 'Sophie', img: Picture1, url: 'https://calendar.app.google/fM4LbP9maa6CU3dCA'},
        {name: 'Barret', firstname: 'Julie', img: Picture2, url: 'https://calendar.app.google/fM4LbP9maa6CU3dCA'},
        {name: 'Mateu', firstname: 'Stéphanie', img: Picture3, url: 'https://calendar.app.google/fM4LbP9maa6CU3dCA'},
        {name: 'Molinier', firstname: 'Elsa', img: Picture4, url: 'https://calendar.app.google/fM4LbP9maa6CU3dCA'}
    ];

    return (
        <section style={{display: 'flex', flexDirection: 'column', gap: '60px'}}>
            <Stack flexDirection='row' flexWrap={isDesktop ? 'none' : 'wrap'} justifyContent={'center'} alignItems={'center'} gap={2}>
                {memberList.map(member =>
                    <Stack
                        key={'Member' + member.name}
                        width={isDesktop ? '100%' : '45%'}
                        alignItems={'center'}
                        backgroundColor={'white'}
                        borderRadius={'10px'}
                        boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}
                        position='relative'
                    >
                        <Avatar variant="rounded" src={member.img} sx={{ width: '100%', height: 200 }} />
                        <Typography py={3} color={'secondary'} fontSize={'20px'} fontWeight={'bold'} textAlign='center' fontFamily={'Quicksand'}>
                            {member.firstname} {member.name}
                        </Typography>
                        <Stack width={'100%'} p={'0px 16px 30px 16px'} alignItems={'center'} gap={3}>
                            <Divider variant='middle' flexItem/>
                            <Stack flexDirection='row' alignItems={'center'} justifyContent={'center'} height={'100%'} gap={1}>
                                <PhoneRounded color='primary' />
                                <Link href={"tel:+33600000000"} fontSize={'18px'} color={'primary'} fontFamily={'Quicksand'}>
                                    06.00.00.00.00
                                </Link>
                            </Stack>
                            <Typography fontSize={'14px'} color={'secondary'}>
                                OU
                            </Typography>
                            <Button href={member.url} variant='contained' target={'_blank'} >
                                Prendre RDV
                            </Button>
                        </Stack>
                    </Stack>
                )}
            </Stack>
            <MapLocation />
        </section>
    );
}