import * as yup from "yup";

export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required("El email es requerido").email("El email no es valido"),
    password: yup.string().trim().required("El password es requerido").min(4, "El minimo debe ser 4 caracteres").max(20, "El maximo debe ser 20 caracteres"),
})

export const RegisterValidate = yup.object().shape({
    username: yup.string().trim().required("El username es requerido").min(4, "El minimo debe ser 4 caracteres").max(20, "El maximo debe ser 20 caracteres"),
    email: yup.string().trim().required("El email es requerido").email("El email no es valido"),
    password: yup.string().trim().required("El password es requerido").min(4, "El minimo debe ser 4 caracteres").max(20, "El maximo debe ser 20 caracteres"),
})