import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { tokenAtom } from "../store";
import UseApi from "../hooks/useApi";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [token, setToken] = useAtom(tokenAtom);
  // to store the token
  // const [user, setUser] = useState('');
  // to decide when to fetch and the frequency to follow
  // const [fetchAgain, setFetchAgain] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  // to keep a track of the data
  const [dData, setDData] = useState([]);
  const { GetTime } = UseApi();
  useEffect(() => {
    const toke = localStorage.getItem("token");
    setToken(toke);
    if (!toke) {
      navigate("/login");
    }
    if (location.pathname == "/admin/manage/view") {
      GetTime();
    }
  }, [navigate, location]);
  return (
    <AuthContext.Provider value={{ dData }}>{children}</AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
// export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
