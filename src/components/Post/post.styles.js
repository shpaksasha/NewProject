import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(theme => ({

root: {
    position: 'relative',
    display: 'block',
    marginTop: '20px',
    border: '2px solid black',
    alignItems: 'center'

},

description: {

    display: 'block',
    justifyContent: 'space-around',
    padding: '10px',
    alignItems: 'center',
},
button: {
    display: 'block',
    position: 'absolute',
    top: '50%',
    right: 0,
}
}))
