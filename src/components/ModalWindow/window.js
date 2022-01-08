import React from 'react';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    myModal: {
        position: 'fixed',
        display: 'none',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // backgroundColor: 'black',
        // opacity: 0.5
    },
    modalActive: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        backgroundColor: '#eeeeee',
        padding: '50px',
        borderRadius: '15px',
        minWidth: '450px'
    }
}))

const ModalWindow = ({children}) => {
    const classes = useStyles()

    return (
        <div className={`${classes.myModal} ${classes.modalActive}`}>
            <div className={classes.modalContent}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;
