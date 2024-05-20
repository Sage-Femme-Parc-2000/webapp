
import MEMBER_LIST from "../../datas/TeamData";

import MapLocation from "../../components/MapLocation/MapLocation";
import PicturesSlider from "../../components/PicturesSlider/PicturesSlider";

import {
    Chip, Divider, Stack, Avatar, Typography, useMediaQuery,
    List, ListItem, ListItemIcon, ListItemText
} from "@mui/material";
import {
    Accessible, DirectionsCarRounded, LocalParking, LocationOnRounded, TramRounded
} from "@mui/icons-material";

import enterImg from "../../assets/img/home/plaque.jpg";
import pregnantCategory from "../../assets/img/category/pregnant.jpg";
import babyCategory from "../../assets/img/category/baby.jpg";
import adultCategory from "../../assets/img/category/adult.jpg";
import WomanCategory from "../../assets/img/category/woman.jpg";
import {Link} from "react-router-dom";

export default function Home() {
    const dividerStyle = {
        "&::before, &::after": {borderColor: "secondary.main"},
    }

    return (
        <Stack component={'section'} gap={5} alignItems={'center'}>
            <GeneralInformations />
            <Divider flexItem sx={dividerStyle}>
                <Chip label='Nos locaux' color='secondary' sx={{fontSize: '15px'}}/>
            </Divider>
            <PicturesSlider />
            <Divider flexItem sx={dividerStyle}>
                <Chip label='Notre équipe' color='secondary' sx={{fontSize: '15px'}}/>
            </Divider>
            <TeamCard/>
            <Divider flexItem sx={dividerStyle}>
                <Chip label='Nos compétences' color='secondary' sx={{fontSize: '15px'}}/>
            </Divider>
            <SkillInformations/>
            <Divider flexItem sx={dividerStyle}>
                <Chip label='Où nous trouver ?' color='secondary' sx={{fontSize: '15px'}}/>
            </Divider>
            <LocationInformations />
        </Stack>
    );
}

function GeneralInformations() {
    const isDesktop = useMediaQuery('(min-width:800px)');

    return (
        <Stack
            flexDirection={isDesktop ? 'row' : 'column'}
            width={isDesktop? '100%' : '90%'}
            boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}
        >
            <Avatar variant="rounded" src={enterImg} sx={{ width: isDesktop? '40%' : '100%', height: 'auto' }}/>
            <Stack p={4} gap={2}>
                <Typography color={'primary'} fontSize={'22px'} fontWeight={'bold'} fontFamily={'Quicksand'} textAlign='center'>
                    CABINET DU PÔLE SANTÉE PARC 2000
                </Typography>
                <Typography fontSize={"19px"} textAlign='justify' fontFamily={'Quicksand'}>
                    Sophie Edwards, Julie Barret, Stéphanie Mateu et Elsa Molinier vous souhaite la bienvenue sur le
                    site des sages-femmes du parc 2000 de Montpellier.
                    Nous vous recevons pour une approche complète de la santé des femmes.
                    <br/>
                    <br/>Nous sommes disponibles pour répondre à vos questions ou pour planifier un rendez-vous.
                </Typography>
            </Stack>
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

function SkillInformations() {
    const isDesktop = useMediaQuery('(min-width:800px)');

    return (
        <Stack
            flexDirection={isDesktop ? 'row' : 'column'}
            width={isDesktop? '100%' : '90%'}
            boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}
        >
            <Stack flexDirection='row' flexWrap='wrap' width={'100%'}>
                <Avatar variant="square" src={pregnantCategory} sx={{ width: '50%', height: 'auto' }}/>
                <Avatar variant="square" src={babyCategory} sx={{ width: '50%', height: 'auto' }}/>
                <Avatar variant="square" src={adultCategory} sx={{ width: '50%', height: 'auto' }}/>
                <Avatar variant="square" src={WomanCategory} sx={{ width: '50%', height: 'auto' }}/>
            </Stack>
            <Stack p={4} gap={2}>
                <Typography fontSize={"19px"} textAlign='justify' fontFamily={'Quicksand'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    <br/>
                    <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </Typography>
                <Link to={'/Skill'} style={{textDecoration: 'none'}}>
                    <Typography color={'primary'} fontFamily={'Quicksand'} fontSize={'20px'} fontWeight={'bold'} textAlign='center'>
                        Voir plus...
                    </Typography>
                </Link>
            </Stack>
        </Stack>
    );
}

function LocationInformations() {
    const isDesktop = useMediaQuery('(min-width:800px)');

    return (
        <Stack
            flexDirection={isDesktop ? 'row' : 'column-reverse'}
            width={isDesktop? '100%' : '90%'}
            boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}
        >
            <Stack py={2} px={4} justifyContent={'space-between'}>
                <Typography fontSize={"16px"} textAlign='justify' fontFamily={'Quicksand'} fontWeight={'bold'} color={'secondary'}>
                    Le cabinet du Parc 2000 est situé dans la ZAC Parc 2000, extension du quartier Mosson / Celleneuve
                    à Montpellier :
                </Typography>
                <List dense={true}>
                    <ListItem>
                        <ListItemIcon><LocationOnRounded color='primary' fontSize='small'/></ListItemIcon>
                        <ListItemText primary="127 Rue Maurice Béjart, 34080 Montpellier"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><TramRounded color='primary' fontSize='small'/></ListItemIcon>
                        <ListItemText primary="Accessible en tramway (ligne 3 : arrêt Celleneuve)"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><DirectionsCarRounded color='primary' fontSize='small'/></ListItemIcon>
                        <ListItemText primary="Accessible en voiture par la voie rapide"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><LocalParking color='primary' fontSize='small'/></ListItemIcon>
                        <ListItemText primary="Parking disponible et réservé aux patients."/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><Accessible color='primary' fontSize='small'/></ListItemIcon>
                        <ListItemText primary="Le centre est aux normes handicapés, les accès adaptés aux PMR"/>
                    </ListItem>
                </List>
            </Stack>
            <MapLocation width={isDesktop ? '50%' : '100%'}/>
        </Stack>
    );
}