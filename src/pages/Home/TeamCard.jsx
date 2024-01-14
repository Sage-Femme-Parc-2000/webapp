
import {Avatar, Stack, Typography, useMediaQuery} from "@mui/material";

import Picture1 from '../../assets/img/team/team1Picture.jpg'
import Picture2 from '../../assets/img/team/team2Picture.jpg'
import Picture3 from '../../assets/img/team/team3Picture.jpg'
import Picture4 from '../../assets/img/team/team4Picture.jpg'

export default function TeamCard() {
    const isDesktop = useMediaQuery('(min-width:800px)');

    const memberList = [
        {name: 'Edwards', firstname: 'Sophie', img: Picture1, desc: ['suivi de grossesse', 'préparation à la naissance', 'rééducation du périnée']},
        {name: 'Barret', firstname: 'Julie',  img: Picture2, desc: ['suivi de grossesse', 'préparation à la naissance', 'suivi gynécologique', 'prescription et pose de contraceptifs', 'acupuncture', 'micronutrition', 'visites à domiciles après accouchement et grossesse pathologique']},
        {name: 'Mateu', firstname: 'Stéphanie', img: Picture3, desc: ['échographie obstétricales']},
        {name: 'Molinier', firstname: 'Elsa', img: Picture4, desc: ['suivi gynécologique', 'contraception : prescription et pose', 'INDIBA (tecartherapie)', 'IVG médicamenteuse à domicile', 'suivi de grossesse', 'préparation à la naissance', 'rééducation du périnée', 'visite à domicile après accouchement et pour grossesse pathologique']}
    ]

    return (
        <Stack flexDirection='row' flexWrap={isDesktop ? 'none' : 'wrap'} justifyContent={'center'} gap={2}>
            {memberList.map(member =>
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
