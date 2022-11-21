import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import axios from "axios";
import { setCurrentUser } from "../../../Redux/actions";
import { useDispatch } from "react-redux";

const IsAuthenticated = () => {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  if (user) {
    axios.post("https://hype-shop.vercel.app/authentication", user).then((res) => {
      dispatch(setCurrentUser(res.data[0]));
    });
  }

  return (
    <div className="flex justify-around">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
};

export default IsAuthenticated;

