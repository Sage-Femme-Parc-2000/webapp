
import MEMBER_LIST from "../../datas/TeamData";

import {
    Avatar, Stack, Typography, Divider, List, ListItem, ListItemText, useMediaQuery
} from "@mui/material";

export default function Contact() {
    const isDesktop = useMediaQuery('(min-width:800px)');

    return (
        <Stack component={'section'} justifyContent={'center'} alignItems={'center'} gap={2}>
            {MEMBER_LIST.map((member, index) =>
                <Stack
                    key={'Member' + member.name}
                    flexDirection={isDesktop ? (index%2 === 0 ? 'row-reverse' : 'row') : "column"}
                    width={'90%'}
                    alignItems={'center'}
                    backgroundColor={'white'}
                    borderRadius={'10px'}
                    boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}
                >
                    <Avatar variant="rounded" src={member.img} sx={{ width: 250, height: 250, marginTop: isDesktop ? 0 : 2 }} />
                    <Stack width={'100%'} gap={2} alignItems={'center'} justifyContent={'center'} p={2}>
                        <Typography color={'secondary'} fontSize={'20px'} fontWeight={'bold'} fontFamily={'Quicksand'}>
                            {member.firstname} {member.name}
                        </Typography>
                        <Stack width={'50%'}>
                            <Divider variant='middle' flexItem/>
                        </Stack>
                        <Stack width={'70%'} height={'100%'} alignItems={'center'} justifyContent={'center'} gap={1}>
                            <List dense>
                                <ListItem>
                                    <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Single-line item"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Single-line item dolor sit amet"/>
                                </ListItem>
                            </List>
                        </Stack>
                    </Stack>
                </Stack>
            )}
        </Stack>
    );
}