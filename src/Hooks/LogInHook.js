import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogInRequest } from "../Store/Requests/LogInRequest";
import { useNavigate } from "react-router-dom";

//login Hook
export const UseLogIn = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, SetEmail] = useState(""); //email state
  const [password, SetPassword] = useState(""); //password state

  //get data from store
  const response = useSelector((state) => state.LogInSlice.login);
  const Loading = useSelector((state) => state.LogInSlice.loading);

  //submit login button
  const HandleLogIn = async () => {
    //validation
    if (email === "") {
      console.log("enter");
      return;
    }
    if (password === "") {
      console.log("enter");
      return;
    }

    await dispatch(
      LogInRequest({
        email: email,
        password: password,
      })
    );
  };

  //process response of login
  useEffect(() => {
    if (Loading === false) {
      if (response.data) {
        console.log(response.data.token);
        if (response) {
          sessionStorage.setItem("token", response.data.token);
          setTimeout(() => {
            navigate("/admin/manegment-information");
          }, 1500);
        }
        if (response === "Incorrect email or password") {
        }
      }
    }
  }, [Loading]);

  return [SetEmail, SetPassword, HandleLogIn];
};
