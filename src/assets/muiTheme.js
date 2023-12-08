import {
    createTheme,
    ThemeProvider
} from "@mui/material";

const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#F5377B'
        },
        secondary: {
            main: '#173054'
        }
    }
});

const sageFemmeParc2000Theme = createTheme(colorTheme, {});

export default function SageFemmeParc2000Theme(props) {
    return (
        <ThemeProvider theme={sageFemmeParc2000Theme}>
            {props.children}
        </ThemeProvider>
    );
}