import * as React from "react";
import "../../index.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { BsCheck2All } from "react-icons/bs";

export default function Homepage() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigateLogin = () => {
    setAnchorElNav(navigate("/login"));
  };

  const navigateSignUp = () => {
    setAnchorElNav(navigate("/signup"));
  };


  return (
    <div className="homeContainers">
      <Card
        className="cardHomePage"
        sx={{
          marginTop: 2,
          height: "80%",
          width: "90%",
          backgroundColor: "#fff",
          fontFamily: "Helvetica Neue",
          listStyleType: "none",
          listStyle: "none",
        }}
      >
        <div className="textBox">
          <p className="HomePagetitle">Welcome Otaku!</p>
          <p className="HomePageFirstText">
            In this website you can manage all your manga collection!{" "}
          </p>
          <div className="HomePageText">
            <ul>
              <li>
                <BsCheck2All style={{ color: "black" }} /> Manage all the titles
                you have and easily filter them
              </li>
              <li>
                <BsCheck2All style={{ color: "black" }} /> Manage the mangas you
                are reading and in which volume you have stopped
              </li>
              <li>
                <BsCheck2All style={{ color: "black" }} /> Easily manage how
                many volumes you own and check which collections are complete.
              </li>
              <p className="buttonHomePage">
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "black",
                    fontFamily: "Helvetica",
                    fontSize: 13,
                    marginTop: 30,
                    textAlign: "center",
                  }}
                  onClick={navigateSignUp}
                >
                  <b>Sign Up</b>
                </Button>{" "}
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "black",
                    fontFamily: "Helvetica",
                    fontSize: 13,
                    marginTop: 30,
                  }}
                  onClick={navigateLogin}
                >
                  <b>Log In</b>
                </Button>
              </p>
            </ul>
          </div>
        </div>
      </Card>

      <div className="imgHomePage">
        <img
          src="library.jpg"
          alt="library"
          style={{
            marginTop: 15,
            width: 650,
            heigh: 590,
            display: "flex",
            borderRadius: 4,
          }}
        />
      </div>
    </div>
  );
}
