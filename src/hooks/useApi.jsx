import { useState } from "react";
import axios from "axios";
import { CHANGEPSD, GETTIME, LOGIN, REGISTER } from "../constant/api";
import { useAtom } from "jotai";
import { timeAtom, tokenAtom } from "../store/index";
import { useNavigate } from "react-router";
const UseApi = () => {
  // operation characteristics
  const [, setTime] = useAtom(timeAtom);
  const [, setToken] = useAtom(tokenAtom);
  const [op, setOp] = useState({
    appErr: null,
    servreErr: null,
  });
  const navigate = useNavigate();
  // configuration
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const token = localStorage.getItem("token");
  // Post Op Configuration
  const postConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  //register
  const Register = async (input) => {
    try {
      const { data } = await axios.post(REGISTER, input, config);
      console.log(data);
      localStorage.setItem("token", data.token);
      setToken(data.token);
      input.role ? navigate("/admin/manage") : navigate("/");
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };
  const Login = async (input) => {
    try {
      const { data } = await axios.post(LOGIN, input, config);
      localStorage.setItem("token", data.token);
      navigate("/homepage");
      setToken(data.token);
      setCookie();
      GetTime();
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
      console.log(op.appErr);
    }
  };
  const GetTime = async () => {
    try {   
      const { data } = await axios.get(GETTIME, postConfig);
      setTime(data);
      // console.log('-------+++++++++++',data)
    } catch (error) {
      // console.log('eroooooooooooooo',data.message)
    }
  };

  const ChangePsd = async () => {
    try {
      const { data } = await axios.post(CHANGEPSD, postConfig);
      localStorage.setItem("token", data.token);
      setToken(data.token);
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
      console.log(op.appErr);
    }
  };
  return { Register, Login, setOp, op, GetTime };
};
export default UseApi;
