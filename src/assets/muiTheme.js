import {
    createTheme,
    ThemeProvider
} from "@mui/material";
import Quicksand from './fonts/Quicksand/Quicksand-Regular.ttf';

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

const sageFemmeParc2000Theme = createTheme(colorTheme, {
    typography: {
        fontFamily: 'Quicksand, sans-serif'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Quicksand';
                    font-weight: normal;
                    src: local('Quicksand') local('Quicksand-Regular') url(${Quicksand}) format('truetype');
                }
            `
        }
    }
});

export default function SageFemmeParc2000Theme(props) {
    return (
        <ThemeProvider theme={sageFemmeParc2000Theme}>
            {props.children}
        </ThemeProvider>
    );
}