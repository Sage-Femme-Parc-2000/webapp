
import {Stack} from "@mui/material";

export default function MapLocation() {

    const urlLocation = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.461974329265!2d3.8208200765292366!3d43.617742854722884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6ac29abfbb31b%3A0xb87bbf3fa2b3619e!2sP%C3%B4le%20Sant%C3%A9%20Parc%202000!5e0!3m2!1sfr!2sfr!4v1702000673553!5m2!1sfr!2sfr';

    return (
        <Stack borderRadius={'10px'} boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}>
            <iframe
                title={'MapLocation'}
                src={urlLocation}
                width="100%"
                height="300px"
                allowFullScreen=""
                loading="Map location"
                referrerPolicy="no-referrer-when-downgrade"
                style={{border:0, borderRadius: '10px'}}
            />
        </Stack>
    );
}
