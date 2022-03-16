import React from "react";
import NavbarItem from "./NavbarItem";

export default function LoggedOut() {
  return (
    <>
      <div class="loggedIn">
        <NavbarItem path="/login" linkText="LOGIN" />
        <NavbarItem path="/signup" linkText="SIGN UP" />
      </div>
    </>
  );
}
