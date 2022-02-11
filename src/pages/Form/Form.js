import React from 'react';
import {useForm} from "react-hook-form";
import {makeStyles} from "@mui/styles";
import Box from "@mui/material/Box";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        backgroundColor: '#4f9384',
        height: 640,
        width: 430,
        borderRadius: '8px'
    },
    form: {
        display: 'block',
        textAlign: 'center',

    },
    input: {
        boxSizing: 'border-box',
        color: '#0d1413',
        fontSize: '16px',
        width: '345px',
        minHeight: '42px',
        borderRadius: '8px',
        lineHeight: '8px',
        marginBottom: '4px',

    },
    label: {
        fontSize: '0.9em',
        display: 'inherit',
        textAlign: 'left',
        textIndent: '1em'
    },
    error: {
        color: '#bb2458',
        textAlign: 'left',
        textIndent: '0.9em',
        fontSize: '0.8em',
    },

}))

const Form = () => {
    const classes = useStyles()
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm({mode: 'onBlur'})

    const submit = (data) => {
        alert(JSON.stringify(data))
        reset()
    }

    return (
        <>
            <h1>React-Hook-Form</h1>
            <div className={classes.root}>
                <form className={classes.form} onSubmit={handleSubmit(submit)}>
                    <Box sx={{mb: 9, maxHeight: '25px'}}>
                        <label className={classes.label}>Ім'я</label>
                        <input className={classes.input}
                               {...register('firstName', {
                                   required: 'Заповніть поле',
                                   maxLength: {
                                       value: 15,
                                       message: 'максимальна кіл-ть. симвовів 15'
                                   }
                               })}
                        />
                        <div className={classes.error}>{errors?.firstName && <span>{errors?.firstName?.message || 'Error!'}</span>}</div>
                    </Box>
                    <Box sx={{maxHeight: '25px'}}>
                        <label className={classes.label}>Прізвище</label>
                        <input className={classes.input}
                               {...register('lastName', {
                                   required: 'Заповніть поле',
                                   maxLength: {
                                       value: 15,
                                       message: 'максимальна кіл-ть. симвовів 15'
                                   }
                               })}
                        />
                        <div className={classes.error}>{errors?.lastName && <span>{errors?.lastName?.message || 'Error!'}</span>}</div>
                    </Box>
                    <input type='submit'/>
                </form>
            </div>
        </>
    );
};

export default Form;
