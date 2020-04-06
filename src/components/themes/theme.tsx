import { createMuiTheme } from '@material-ui/core/styles';
import * as color from '@material-ui/core/colors';

const theme : any = createMuiTheme({
    palette: {
        type: 'dark',
        primary: color.teal,
        secondary: color.teal
    }
});

export default theme;