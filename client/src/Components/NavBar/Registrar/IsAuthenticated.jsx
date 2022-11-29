import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import UnloginProfile from "./UnlogingProfile";
import axios from "axios";
import { setCurrentUser } from "../../../Redux/actions";
import { useDispatch } from "react-redux";
import icon from "../../images/user2.png"

const IsAuthenticated = () => {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  if (user) {
    axios.post("http://localhost:3001/authentication", user).then((res) => {
      dispatch(setCurrentUser(res.data[0]));
    });
  }

  return (
    <div className="relative flex justify-around">
      {isAuthenticated ? <Profile /> : <UnloginProfile/>}
      
    </div>
  );
};

export default IsAuthenticated;

