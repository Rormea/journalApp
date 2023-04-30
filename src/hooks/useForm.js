import { useEffect, useState } from 'react'

export const useForm = (initialForm = {}, formValidator = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidator();
    }, [formState])



    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    };

    const onResetForm = () => {
        setFormState(initialForm)
    };


    const createValidator = () => {

        const formChekedValues = {};

        for (const formKeys of Object.keys(formValidator)) {
            // console.log(formKeys)
            const [fn, errorMessage] = formValidator[formKeys];
            // console.log(errorMessage)
            formChekedValues[`${formKeys}Valid`] = fn(formState[formKeys]) ? null : errorMessage;
            console.log(formChekedValues)
            setFormValidation(formChekedValues);
        }
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        //validaciones createValidator
        // ...formValidation,
    };
};
