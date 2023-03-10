import { useFormik } from "formik";
import Image from "next/image";
import { object, string } from "yup";
// import CountDown from "./CountDown";
import { PinInputCustom } from "./PinInput";

const Register: React.FC = (): React.ReactElement => {
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: () => {},
    validationSchema: object({
      phone: string().trim().required("شماره موبایل را وارد نمایید"),
    }),
  });
  return (
    <div className="relative flex min-h-full justify-center md:px-12 lg:px-0 flex-auto">
      <div className="relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
        <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          <div className="flex flex-col">
            <h3 className="mb-3">ورود / ثبت نام</h3>
          </div>
          <form className="justify-center mb-3" onSubmit={formik.handleSubmit}>
            <div className="relative" data-te-input-wrapper-init>
              <input
                className="peer appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 w-full leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                type="tel"
                name="phone"
                placeholder="091"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label
                htmlFor="exampleFormControlInput1"
                className="pointer-events-none absolute top-1 right-3 mb-0 max-w-[90%] origin-[100%_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.1rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[1.1rem] peer-data-[te-input-state-active]:scale-y-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                شماره موبایل خود را وارد نمایید
              </label>
            </div>{" "}
            {formik.errors.phone && (
              <div className="text-danger mt-2">{formik.errors.phone}</div>
            )}
            <button
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full mt-3"
              type="submit"
            >
              ورود / ثبت‌ نام{" "}
              <span aria-hidden="true" className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </span>
            </button>
          </form>
          <PinInputCustom
          // isClicked={isClicked}
          // telephone={values.telephone}
          // setPincode={setPincode}
          // pincode={pincode}
          // setValidate={setValidate}
          // validate={validate}
          // setDisabled={setDisabled}
          // disabled={disabled}
          // setError={setError}
          // error={error}
          />
        </div>
      </div>
      <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
        <Image
          alt=""
          src="/static/images/background-auth.4bcf3f4b.jpg"
          width="1664"
          height="1866"
          decoding="async"
          data-nimg="1"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Register;
