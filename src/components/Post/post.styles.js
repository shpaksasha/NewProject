import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(theme => ({

    root: {
        position: 'relative',
        marginTop: '17px',
        border: '2px solid orange',
    },
    description: {
        flexGrow: 1,
        maxWidth: '900px',
        display: 'block',
        padding: '10px',
        alignItems: 'center',
    },
    button: {
        position: 'absolute',
        display: 'block',
        right: 35,
        bottom: 29
    }
}))
