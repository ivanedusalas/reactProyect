import * as yup from 'yup';

export const userSchema = yup.object().shape({
    nombre: yup.string().required('Por favor ingresa tu nombre'),
})