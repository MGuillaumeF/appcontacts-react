import { createMuiTheme } from '@material-ui/core/styles';
import * as color from '@material-ui/core/colors';

const light : any = createMuiTheme({
    palette: {
        type: 'light',
        primary: color.teal,
        secondary: color.teal
    }
});
const dark : any = createMuiTheme({
    palette: {
        type: 'dark',
        primary: color.teal,
        secondary: color.teal
    }
});

export default {light, dark};