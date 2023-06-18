import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export default function LogOut() {
  const navigate = useNavigate();
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      alert(" You are Successfully loged in✨✨");
      navigate("/");
    })
    .catch((error) => {
      alert(error);
    });
  return <div>LogOut</div>;
}
