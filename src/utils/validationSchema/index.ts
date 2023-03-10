import * as yup from "yup";

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const phoneRegExp = /^(\+98|0)?9\d{9}$/g;

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const validationSchema = yup.object({
  firstname: yup.string().required("این فیلد اجباری است"),
  lastname: yup.string().required("این فیلد اجباری است"),
  telephone: yup
    .string()
    .matches(phoneRegExp, "شماره همراه نامعتبر است")
    .required("این فیلد اجباری است"),
  // code: yup.string().required("این فیلد اجباری است"),
  password: yup
    .string()
    .required("این فیلد اجباری است")
    .min(8, "گذرواژه باید حداقل ۸ کاراکتر باشد"),
  // .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  // email: yup
  //   .string()
  //   .email("نشانی رایانامه را بصورت درست وارد کنید")
  //   .required("این فیلد اجباری است"),
});

export const validationSchemaLogin = yup.object({
  telephone: yup
    .string()
    .matches(phoneRegExp, "شماره همراه نامعتبر است")
    .required("این فیلد اجباری است"),
  password: yup
    .string()
    .required("این فیلد اجباری است")
    .min(8, "گذرواژه باید حداقل ۸ کاراکتر باشد"),
});

export const validationSchemaTel = yup.object({
  telephone: yup
    .string()
    .matches(phoneRegExp, "شماره همراه نامعتبر است")
    .required("این فیلد اجباری است"),
});

export const validationSchemaUser = yup.object({
  firstname: yup.string().required("این فیلد اجباری است"),
  lastname: yup.string().required("این فیلد اجباری است"),
  email: yup
    .string()
    .email("نشانی رایانامه را بصورت درست وارد کنید")
    .required("این فیلد اجباری است"),
  code_meli: yup.string().required("این فیلد اجباری است"),
});

export const validationSchemaAddress = yup.object({
  address: yup.string().required("این فیلد اجباری است"),
  postcode: yup
    .string()
    .required("این فیلد اجباری است")
    .min(10, "کد پستی باید حداقل 10 رقم باشد")
    .max(10, "کد پستی باید حداکثر 10 رقم باشد"),
  province_id: yup.string().required("این فیلد اجباری است"),
  city_id: yup.number().required("این فیلد اجباری است"),
});

export const validationSchemaMessage = yup.object({
  name: yup.string().required("required"),
  email: yup.string().email("Enter the email correctly").required("required"),
  message: yup.number().required("required"),
});

export const validationChangeMobile = yup.object({
  telephone: yup.number().required("required"),
});

export const validationChangePassword = yup.object({
  password: yup.string().required("required"),
  new_password: yup.string().required("required"),
});

export const validationSchemaTest = yup.object({
  name: yup.string().required("required"),
  gender: yup.string().required("required"),
  countries: yup
    .object()
    .shape({
      label: yup.string(),
    })
    .nullable()
    .required("required"),
  countries1: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required("required"),
      })
    )
    .min(1, "Must have at least one countries1"),
  birthDate: yup
    .date()
    .nullable()
    .required("required")
    .min(new Date(), "Start Date must be later than today"),
  film: yup.string().required("required"),
  file: yup
    .mixed()
    .required("required")
    .test(
      "fileSize",
      "اندازه بیش از حد مجاز است",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "فرمت فایل",
      "فرمت نامعتبر است",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});
