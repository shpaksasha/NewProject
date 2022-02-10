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
        backgroundColor: '#293836',
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
        lineHeight: '10px',
        marginBottom: '4px'

    },
    label: {
        display: 'inherit',
        textAlign: 'left',
        textIndent: '1em'
    }
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
                    <Box sx={{mb: 6}}>
                        <label className={classes.label}>FirstName</label>
                        <input className={classes.input}
                               {...register('firstName', {
                                   required: 'Поле обязательно для заполнения',
                                   minLength: {
                                       value: 10,
                                       message: 'min количество символов 10 '
                                   }
                               })}
                        />
                        <div>{errors?.firstName && <span>{errors?.firstName?.message || 'Error!'}</span>}</div>
                    </Box>
                    <Box>
                        <label className={classes.label}>LastName</label>
                        <input className={classes.input}
                               {...register('lastName', {
                                   required: 'Поле обязательно для заполнения',
                                   minLength: {
                                       value: 10,
                                       message: 'min количество символов 10 '
                                   }
                               })}
                        />
                        <div>{errors?.lastName && <span>{errors?.lastName?.message || 'Error!'}</span>}</div>
                    </Box>
                    <input type='submit'/>
                </form>
            </div>
        </>
    );
};

export default Form;
