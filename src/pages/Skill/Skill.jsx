
import {useMemo, useState} from "react";
import ACTIVITY_DATA from "../../datas/SkillData";

import babyCategory from '../../assets/img/category/baby.jpg'
import WomanCategory from '../../assets/img/category/woman.jpg'
import pregnantCategory from '../../assets/img/category/pregnant.jpg'
import adultCategory from '../../assets/img/category/adult.jpg'

import {
    Accordion, AccordionDetails, AccordionSummary, Avatar, Chip, Stack, Typography, useMediaQuery
} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

export default function Skill() {
    const isDesktop = useMediaQuery('(min-width:800px)');
    const [expanded, setExpanded] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(0)
    const activityCategory = useMemo(() => ACTIVITY_DATA.filter(activity => activity.category === selectedCategory), [selectedCategory])

    const categoryList = [
        {id: 0, title: 'Enceinte', img: pregnantCategory},
        {id: 1, title: 'Bébé', img: babyCategory},
        {id: 2, title: 'Adultes', img: adultCategory},
        {id: 3, title: 'Femme', img: WomanCategory},
    ];

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <Stack component={'section'} alignItems={'center'} gap={3}>
            <Stack width={'100%'} flexDirection='row' justifyContent={'space-between'}>
                {categoryList.map(category =>
                    <Avatar
                        key={'Category ' + category.title}
                        variant="rounded"
                        src={category.img}
                        sx={{
                            width: 200,
                            height: 200,
                            boxShadow: selectedCategory === category.id ? '0 13px 35px -12px rgba(23,48,84,1)' : '0 13px 35px -12px rgba(35,35,35,.1)',
                            '&:hover' : {
                                boxShadow: '0 13px 35px -12px rgba(23,48,84,1)',
                            }
                        }}
                        onClick={() => setSelectedCategory(category.id)}
                    />
                )}
            </Stack>
            {activityCategory.map((activity, index) =>
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
                            {activity.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )}
        </Stack>
    );
}