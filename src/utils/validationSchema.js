import * as yup from "yup";

export const schema = yup
    .object({
        email: yup.string()
        .required().min(3, "Too less")
        .max(40, "Too more"),

        password: yup.string()
        .required().min(4, "Too less")
        .max(40, "Too more"),
    })
    .required();
