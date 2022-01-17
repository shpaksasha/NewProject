import React from 'react';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    mainModal: {
        // height: '100vh',
        // width: '100vw',
        zIndex: 1,
        display: 'none',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        transition: '1s',
        // backgroundColor: 'black',
        // pointerEvents: 'none'
    },
    modalActive: {
        // pointerEvents: 'all',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        backgroundColor: '#eeeeee',
        padding: '60px',
        borderRadius: '15px',
        minWidth: '450px',
        minHeight: '170px'
    }
}))

const ModalWindow = ({children, visible, setVisible}) => {
    const classes = useStyles()

    const rootClasses = [classes.mainModal]

    if (visible === true) {
        rootClasses.push(classes.modalActive)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;
