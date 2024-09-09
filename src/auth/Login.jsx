import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import AppServerErr from "../errors/AppServerErr";
import Heading from "../components/sign/Heading";
import Input from "../components/sign/Input";
import FormikErr from "../errors/FormikErr";
import SignButton from "../components/sign/SignButton";
import UseApi from "../hooks/useApi";
import { useNavigate } from "react-router";
import Hint from "../components/sign/Hint";
import ForgotPsd from "./ForgotPsd";
import { useAtom } from "jotai";
import { idAtom } from "../store";
const Login = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useAtom(idAtom);
  const navigate = useNavigate();
  const { op, Login, GetTime } = UseApi();

  const formSchema = yup.object({
    affiliateId: yup.string().required("Affiliate Id is required"),
    password: yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      affiliateId: "",
      password: "",
    },
    onSubmit: ({ affiliateId, password }) => {
      Login({ affiliateId, password });
    },
    validationSchema: formSchema,
  });
  return (
    <>
      {!show ? (
        <>
          <Heading label={"Log Account"} />
          <AppServerErr>
            {op.serverErr === "Network Error" ? op.serverErr : null}
          </AppServerErr>
          <form
            className="mt-6 font-sans"
            onSubmit={formik.handleSubmit}
          >
            {id !== "" && (
              <div>
                Remember! Your affiliate ID is&nbsp;{" "}
                <span className="text-red-600">{id}</span>
              </div>
            )}
            <Input
              label={"Affiliate ID"}
              type={"text"}
              name={"affiliateId"}
              value={formik.values.affiliateId}
              onChange={formik.handleChange("affiliateId")}
            />
            <FormikErr
              touched={formik.touched.affiliateId}
              errors={formik.errors.affiliateId}
            />
            <Input
              label={"Password"}
              type={"password"}
              name={"password"}
              value={formik.values.password}
              onChange={formik.handleChange("password")}
            />
            <FormikErr
              touched={formik.touched.password}
              errors={formik.errors.password}
            />
            <AppServerErr>
              {op.appErr === "Affiliate or Password not correct." && op.appErr}
            </AppServerErr>

            <SignButton label={"Login"} />
            <Hint
              label={"Register"}
              question={"Do you wnat to register?"}
              handle={() => navigate("/register")}
            />
            <Hint
              label={"Forgot Password?"}
              className="text-red-600  "
              handle={() => setShow(true)}
            />
          </form>
        </>
      ) : (
        <ForgotPsd setShow={setShow} />
      )}
    </>
  );
};
export default Login;
