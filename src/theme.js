import { createTheme } from '@mui/material/styles';
import { FONT_FAMILY, MAIN_COLOR } from './constant';

export const theme = createTheme({
    palette: {
        primary: {
            main: MAIN_COLOR,
        },
    },
    typography: {
        fontFamily: FONT_FAMILY,
        fontWeightBold: 'bolder'
    }

});

