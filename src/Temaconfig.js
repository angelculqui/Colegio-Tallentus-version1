import { createTheme } from '@mui/material/styles';
import { red } from "@material-ui/core/colors";
import { blue } from '@mui/material/colors';


const theme= createTheme({
    palette: {
        primary: {
            main:blue[700]
        },
        secondary:{
            main:red[700]
        }

    }
})

export default theme;