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
        backgroundColor: '#f0bfb5',
        height: 640,
        maxWidth: 440,
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
    button: {
        backgroundColor: '#e54f4f',
        display: 'block',
        margin: '0 auto',
        border: 'none',
        textTransform: 'uppercase',
        padding: '13px 24px',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#d85d5d',
        }
    },
    hook: {
        textAlign: 'center',
        margin: '35px'
    }
}))

const Form = () => {

    const classes = useStyles()
    // const db = getDatabase(app);
    // console.log(db)

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm({mode: 'onBlur'})

    // const [authorization, setAuth] = useState({})
    //
    // const sendEmail = () => {
    //     set(ref(db, 'users'), {
    //         name: authorization.name,
    //         lastname: authorization.lastname,
    //         telephone: authorization.telephone,
    //         time: new Date(),
    //     });
    // }

    // const updateInput = event => {
    //     setAuth({
    //         ...authorization,
    //         [event.target.name]: event.target.value,
    //     })
    // }

    // const Submit = () => {
    //     sendEmail()
    //     setAuth({
    //         name: '',
    //         lastname: '',
    //         telephone: '',
    //     })
    // }

    const Submit = (data) => {
        alert(JSON.stringify(data))
        reset()
    }
    return (
        <>
            <h1 className={classes.hook}>React-Hook-Form</h1>
            <div className={classes.root}>
                <form className={classes.form} onSubmit={handleSubmit(Submit)}>
                    <Box sx={{mb: 9, maxHeight: '25px'}}>
                        <label className={classes.label}>????'??</label>
                        <input className={classes.input} type='text' name='name'
                               {...register('firstName', {
                                   required: '?????????????????? ????????',
                                   maxLength: {
                                       value: 15,
                                       message: '?????????????????????? ??????-????. ???????????????? 15'
                                   }
                               })}
                        />
                        <div className={classes.error}>{errors?.firstName &&
                            <span>{errors?.firstName?.message || 'Error!'}</span>}</div>
                    </Box>
                    <Box sx={{mb: 9, maxHeight: '25px'}}>
                        <label className={classes.label}>????????????????</label>
                        <input className={classes.input} type='text' name='lastname'
                               {...register('lastName', {
                                   required: '?????????????????? ????????',
                                   maxLength: {
                                       value: 15,
                                       message: '?????????????????????? ??????-????. ???????????????? 15'
                                   }
                               })}
                        />
                        <div className={classes.error}>{errors?.lastName &&
                            <span>{errors?.lastName?.message || 'Error!'}</span>}</div>
                    </Box>
                    <Box sx={{maxHeight: '25px'}}>
                        <label className={classes.label}>??????????????</label>
                        <input className={classes.input} type='tel' name='telephone'
                               {...register('telephone', {
                                   required: '?????????????? ?????????? ????????????????',
                                   maxLength: {
                                       value: 10,
                                       message: '???? ???????????? ??????????????'
                                   }
                               })}
                        />
                        <div className={classes.error}>{errors?.telephone &&
                            <span>{errors?.telephone?.message || 'Error!'}</span>}</div>
                    </Box>
                    <Box sx={{mt: 14}}>
                        <button className={classes.button} type='submit'>????????????????????</button>
                    </Box>
                </form>
            </div>
        </>
    );
};

export default Form;
