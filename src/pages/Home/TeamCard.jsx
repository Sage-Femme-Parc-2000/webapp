
import {Avatar, Stack, Typography} from "@mui/material";
import {Face4} from "@mui/icons-material";

export default function TeamCard() {

    const memberList = [
        {name: 'Edwards', firstname: 'Sophie', desc: ['suivi de grossesse', 'préparation à la naissance', 'rééducation du périnée']},
        {name: 'Barret', firstname: 'Julie', desc: ['suivi de grossesse', 'préparation à la naissance', 'suivi gynécologique', 'prescription et pose de contraceptifs', 'acupuncture', 'micronutrition', 'visites à domiciles après accouchement et grossesse pathologique']},
        {name: 'Mateu', firstname: 'Stéphanie', desc: ['échographie obstétricales']},
        {name: 'Molinet', firstname: 'Elsa', desc: ['suivi gynécologique', 'contraception : prescription et pose', 'INDIBA (tecartherapie)', 'IVG médicamenteuse à domicile', 'suivi de grossesse', 'préparation à la naissance', 'rééducation du périnée', 'visite à domicile après accouchement et pour grossesse pathologique']}
    ]

    return (
        <Stack flexDirection='row' justifyContent={'center'} gap={2}>
            {memberList.map(member =>
                <Stack
                    width={'100%'}
                    alignItems={'center'}
                    backgroundColor={'white'}
                    gap={4}
                    borderRadius={'10px'}
                    boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}
                >
                    <Avatar variant="rounded" sx={{ width: '100%', height: 200 }}>
                        <Face4 fontSize='large' />
                    </Avatar>
                    <Typography color={'secondary'} fontSize={'18px'} fontWeight={'bold'}>
                        {member.firstname} {member.name}
                    </Typography>
                    <Stack p={'0 20px 20px 20px'}>
                        {member.desc.map(desc =>
                            <Typography width={'100%'}>- {desc}</Typography>
                        )}
                    </Stack>
                </Stack>
            )}
        </Stack>
    );
}
