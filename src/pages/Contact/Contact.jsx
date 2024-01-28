
import MEMBER_LIST from "../../datas/TeamData";
import MapLocation from "../../components/MapLocation/MapLocation";

import {Avatar, Button, Stack, Typography, Link, useMediaQuery, Divider} from "@mui/material";
import {PhoneRounded} from "@mui/icons-material";

export default function Contact() {
    const isDesktop = useMediaQuery('(min-width:800px)');

    return (
        <section style={{display: 'flex', flexDirection: 'column', gap: '60px'}}>
            <Stack flexDirection='row' flexWrap={isDesktop ? 'none' : 'wrap'} justifyContent={'center'} alignItems={'center'} gap={2}>
                {MEMBER_LIST.map(member =>
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
                                    {member.tel}
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