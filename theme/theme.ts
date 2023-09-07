import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#40B25C',
            contrastText: '#fff',
        },
        secondary: {
            main: '#A3F9B9',
            contrastText: '#000',
        },
    },
});

export default theme;
