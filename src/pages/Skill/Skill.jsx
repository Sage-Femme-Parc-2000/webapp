
import ACTIVITY_DATA from "../../datas/SkillData";

import {Avatar, Box, Chip, Divider, IconButton, Modal, Stack, Typography, useMediaQuery} from "@mui/material";
import {CloseRounded, KeyboardArrowRightRounded} from "@mui/icons-material";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Skill() {
    const isDesktop = useMediaQuery('(min-width:800px)');
    const [activitySelected, setActivitySelected] = useState(null);

    return (
        <>
            <ActivityModal activity={activitySelected} setActivitySelected={setActivitySelected} />
            <Stack component={'section'} flexDirection='column' alignItems={'center'} gap={3}>
                {ACTIVITY_DATA.map(category =>
                    <Stack
                        key={'Category ' + category.title}
                        width={isDesktop ? '100%' : '90%'}
                        flexDirection={isDesktop ? 'row' : 'column'}
                        borderRadius={'10px'}
                        overflow={'hidden'}
                        backgroundColor={'white'}
                        boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}
                        gap={isDesktop ? 0 : 2}
                    >
                        <Stack flexDirection='row' justifyContent={isDesktop ? 'space-between' : 'center'} marginTop={isDesktop ? 0 : 2}>
                            <Avatar
                                key={'Category ' + category.title}
                                variant="rounded"
                                src={category.img}
                                sx={{width: 230, height: 260}}
                            />
                        </Stack>
                        <Stack width={'100%'} justifyContent={'center'}>
                            {category.activity.map((activity, index) =>
                                <Box height={'100%'} key={'skill ' + activity.name}>
                                    {(index!== 0 || !isDesktop) && <Divider flexItem/>}
                                    <Stack
                                        flexDirection='row'
                                        minHeight={'50px'}
                                        height={'100%'}
                                        alignItems={'center'}
                                        justifyContent={'space-between'}
                                        px={3}
                                        onClick={() => setActivitySelected(activity)}
                                        sx={{'&:hover' : {backgroundColor: 'rgba(245,55,123,0.1)', cursor: 'pointer'}}}
                                    >
                                        <Typography color={'secondary'} fontSize={'17px'} fontFamily={'Quicksand'}>
                                            {activity.name}
                                        </Typography>
                                        <Stack>
                                            <KeyboardArrowRightRounded fontSize='medium' color='secondary'/>
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}
                        </Stack>
                    </Stack>
                )}
            </Stack>
        </>
    );
}

function ActivityModal({activity, setActivitySelected}) {
    const isDesktop = useMediaQuery('(min-width:800px)');

    return (
        <Modal
            open={activity !== null}
            onClose={() => setActivitySelected(null)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Stack
                width={isDesktop ? '40%' : '90%'}
                backgroundColor={'white'}
                position='absolute' top={'50%'} left={'50%'}
                p={4}
                gap={4}
                borderRadius={'10px'}
                sx={{transform: 'translate(-50%, -50%)'}}
            >
                <Stack flexDirection='row' alignItems={'center'} justifyContent={'space-between'}>
                    <Typography color={'secondary'} fontSize={'20px'} fontWeight={'bold'} fontFamily={'Quicksand'}>
                        {activity && activity.name}
                    </Typography>
                    <IconButton aria-label="close" onClick={() => setActivitySelected(null)}>
                        <CloseRounded color='primary' fontSize='medium'/>
                    </IconButton>
                </Stack>

                <Typography textAlign={'justify'}>
                    {activity && activity.description}
                </Typography>

                <Stack flexDirection={isDesktop ? 'row' : 'column'} justifyContent={'center'} gap={1}>
                    {activity && activity.team.map(collaborator =>
                        <Link to={'/Contact'} style={{textDecoration: 'none'}}>
                            <Chip
                                key={'Collaborator ' + collaborator.name}
                                avatar={<Avatar>{collaborator.name.match(/\b\w/g).join('').toUpperCase()}</Avatar>}
                                label={collaborator.name}
                                sx={{fontWeight: 'bold'}}
                                clickable={true}
                            />
                        </Link>
                    )}
                </Stack>
            </Stack>
        </Modal>
    );
}