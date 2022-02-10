import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {
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
        <div>
            <h1>React-Hook-Form</h1>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                <label>FirstName
                    <input
                        {...register('firstName', {
                            required: 'Поле обязательно для заполнения',
                            minLength: {
                                value: 10,
                                message: 'min количество символов 10 '
                            }
                        })}
                    />
                </label>
                <div style={{height: 10}}>
                    {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
                </div>
                </div>
                <div>
                <label>LastName
                    <input
                        {...register('lastName', {
                            required: 'Поле обязательно для заполнения',
                            minLength: {
                                value: 10,
                                message: 'min количество символов 10 '
                            }
                        })}
                    />
                </label>
                <div style={{height: 10}}>
                    {errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
                </div>
                </div>
                <input type='submit'/>
            </form>
        </div>
    );
};

export default Form;
