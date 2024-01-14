
import TeamCard from "./TeamCard";
import PictureSlider from "./PictureSlider";
import {Chip, Divider, Stack} from "@mui/material";
import MapLocation from "./MapLocation";

export default function Home() {

    const dividerStyle = {
        "&::before, &::after": {
            borderColor: "secondary.main",
        },
    }

    return (
        <section>
            <Stack gap={4}>
                <PictureSlider/>
                <Divider sx={dividerStyle}>
                    <Chip label='Notre équipe !' color='secondary' sx={{fontSize: '15px'}}/>
                </Divider>
                <TeamCard/>
                <Divider sx={dividerStyle}>
                    <Chip label='Où nous trouver ?' color='secondary' sx={{fontSize: '15px'}}/>
                </Divider>
                <MapLocation />
            </Stack>
        </section>
    );
}
