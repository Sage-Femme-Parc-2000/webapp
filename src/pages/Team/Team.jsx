
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Chip,
    Stack,
    Typography,
    useMediaQuery
} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import {useState} from "react";

const ACTIVITY_DATA = [
    {name: 'Suivi de grossesse', team: [{name: 'Sophie Edwards'}, {name: 'Julie Barret'}, {name: 'Elsa Molinier'}]},
    {name: 'Préparation à la naissance', team: [{name: 'Sophie Edwards'}, {name: 'Julie Barret'}, {name: 'Elsa Molinier'}]},
    {name: 'Rééducation du périnée', team: [{name: 'Sophie Edwards'}, {name: 'Elsa Molinier'}]},
    {name: 'Suivi gynécologique', team: [{name: 'Julie Barret'}, {name: 'Elsa Molinier'}]},
    {name: 'Préscription et pose de contraceptifs', team: [{name: 'Julie Barret'}, {name: 'Elsa Molinier'}]},
    {name: 'Acupuncture', team: [{name: 'Julie Barret'}]},
    {name: 'Micronutrition', team: [{name: 'Julie Barret'}]},
    {name: 'Visites à domiciles après accouchement et grossesse pathologique', team: [{name: 'Julie Barret'}, {name: 'Elsa Molinier'}]},
    {name: 'échographie obstétricales', team: [{name: 'Stephanie Mateu'}]},
    {name: 'INDIBA (tecartherapie)', team: [{name: 'Elsa Molinier'}]},
    {name: 'IVG médicamenteuse à domicile', team: [{name: 'Elsa Molinier'}]}
];

export default function Team() {
    const isDesktop = useMediaQuery('(min-width:800px)');
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <Stack component={'section'} alignItems={'center'}>
            <Stack alignItems={'center'} gap={3}>
                {ACTIVITY_DATA.map((activity, index) =>
                    <Accordion
                        key={'Activity ' + activity.name}
                        disableGutters
                        expanded={expanded === ('panel' + index)}
                        onChange={handleChange('panel' + index)}
                        sx={{boxShadow: '0 13px 35px -12px rgba(35,35,35,.1)'}}
                    >
                        <AccordionSummary expandIcon={<ExpandMore />} sx={{ backgroundColor: 'rgba(23, 48, 84, 0.1)'}}>
                            <Typography fontFamily={'Quicksand'} fontWeight={'bold'}>{activity.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{p: '16px', display: 'flex',flexDirection: 'column', gap: '10px'}}>
                            <Stack flexDirection={isDesktop ? 'row' : 'column'} justifyContent={'center'} gap={1}>
                                {activity.team.map(collaborator =>
                                    <Chip
                                        key={'Collaborator ' + collaborator.name}
                                        avatar={<Avatar>{collaborator.name.match(/\b\w/g).join('').toUpperCase()}</Avatar>}
                                        label={collaborator.name}
                                        sx={{fontWeight: 'bold'}}
                                    />
                                )}
                            </Stack>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                                ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )}
            </Stack>
        </Stack>
    );
}
