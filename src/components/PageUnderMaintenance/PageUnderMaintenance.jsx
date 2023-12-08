
import {Stack, Typography} from "@mui/material";
import {ConstructionRounded} from "@mui/icons-material";

export default function PageUnderMaintenance() {
    return (
        <Stack flexDirection='row' alignItems={'center'} justifyContent={'center'} minHeight={'calc(100vh - 200px)'} gap={5}>
            <ConstructionRounded color='primary' sx={{fontSize: '60px'}} />
            <Typography variant='h3' textAlign='center' textTransform='uppercase' color={'secondary'}>
                Page en Maintenance ...
            </Typography>
            <ConstructionRounded color='primary' sx={{fontSize: '60px'}} />
        </Stack>
    );
}