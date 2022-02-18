import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(theme => ({

root: {
    position: 'relative',
    display: 'block',
    marginTop: '17px',
    border: '2px solid orange',
},

description: {
    maxWidth: '900px',
    display: 'block',
    justifyContent: 'flex-start',
    padding: '10px',
    alignItems: 'center',
},

}))
