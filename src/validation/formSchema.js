import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, "name must be at least 2 characters")
        .required('name is required'),
    size: yup
        .string()
        .oneOf(['large', 'larger', 'absurd'], "pick a size"),
    jalapeno: yup.boolean(),
    pineapple: yup.boolean(),
    bacon: yup.boolean(),
    roasted_garlic: yup.boolean(),
    special: yup.string(),
});

export default formSchema;