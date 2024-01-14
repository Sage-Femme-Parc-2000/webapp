
import TeamCard from "./TeamCard";
import {Chip, Divider, Stack} from "@mui/material";
import MapLocation from "./MapLocation";
import PicturesSlider from "../../components/PicturesSlider/PicturesSlider";

export default function Home() {

    const dividerStyle = {
        "&::before, &::after": {
            borderColor: "secondary.main",
        },
    }

    return (
        <section>
            <Stack gap={4}>
                <PicturesSlider />
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
