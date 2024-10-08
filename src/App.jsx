import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import AuthProvider from "./context/Auth";
import HomeLayout from "./pages/home/HomeLayout";
import JotaiProvider from "./providers/JotaiProvider";
import PaymentRequest from "./pages/home/PaymentRequest";
import Homepage from "./pages/home/Hompage";
import PaymentHistory from "./pages/home/PaymentHiistory";
import AffiliateLinks from "./pages/home/AffiliateLinks";
import Dashboard from "./pages/dashBoard/Dashboard";
import Register from "./pages/dashBoard/Register";
import LogIn from "./pages/dashBoard/LogIn";
import DashLayout from "./pages/dashBoard/DashLayout";
import LevelUpgrade from "./pages/home/LevelUpgrade";
import ContactUs from "./pages/contactUs/Index";
import AccountInfo from "./pages/home/AccountInfo";
import AdminLayout from "./pages/admin/AdminLayout";
import Payment from "./pages/admin/Payment";
import Message from "./pages/admin/Message";
import Introduce from "./pages/admin/Introduce";
import Manage from "./pages/admin/manage/Manage";
import AddUser from "./pages/admin/manage/AddUser";
import Edit from "./pages/admin/manage/Edit";
import View from "./pages/admin/manage/View";
import { useAtom } from "jotai";
import { tokenAtom } from "./store/index";
const App = () => {
  const [token, setToken] = useAtom(tokenAtom);
  console.log(token);

  return (
    <>
      <JotaiProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route
                path="/login"
                element={<LogIn />}
              />
              <Route
                path="/"
                element={<DashLayout />}
              >
                <Route
                  path="/"
                  element={<Dashboard />}
                />
                <Route
                  path="/register"
                  element={<Register />}
                />
                <Route
                  path="/contact"
                  element={<ContactUs />}
                />
              </Route>

              <Route
                path="/homepage"
                element={<HomeLayout />}
              >
                <Route
                  path="/homepage"
                  element={<Homepage />}
                />
                <Route
                  path="/homepage/payments"
                  element={<PaymentRequest />}
                />
                <Route
                  path="/homepage/payments/history"
                  element={<PaymentHistory />}
                />
                <Route
                  path="/homepage/links/affiliatelinks"
                  element={<AffiliateLinks />}
                />
                <Route
                  path="/homepage/level"
                  element={<LevelUpgrade />}
                />
                <Route
                  path="/homepage/accountsetting"
                  element={<AccountInfo />}
                />
              </Route>

              <Route
                path="/admin"
                element={<AdminLayout />}
              >
                <Route
                  path="/admin"
                  element={<Introduce />}
                />
                <Route
                  path="/admin/manage"
                  element={<Manage />}
                />
                <Route
                  path="/admin/manage/adduser"
                  element={<AddUser />}
                />
                <Route
                  path="/admin/manage/edit"
                  element={<Edit />}
                />
                <Route
                  path="/admin/manage/view"
                  element={<View />}
                />
                <Route
                  path="/admin/payment"
                  element={<Payment />}
                />
                <Route
                  path="/admin/message"
                  element={<Message />}
                />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </JotaiProvider>
    </>
  );
};
export default App;
