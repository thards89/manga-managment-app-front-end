import * as React from "react";
import Paper from "@mui/material/Paper";
import "../../index.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Image from './library.jpg'


export default function Homepage() {
 
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigateLogin = () => {
    setAnchorElNav(navigate("/login"));
  };

   const navigateSignUp = () => {
     setAnchorElNav(navigate("/signup"));
   };

//    const styles = {
//     cardContainer: {
//         backgroundImage: `url(${Image})`,
        
//     }
// };


  return (
    <div className="homeContainers">
      <Card className="cardHomePage"
        sx={{
          marginTop: 2,
          height: '100%',
          width: '90%',
          backgroundColor: "#fff",
          fontFamily: "Helvetica Neue",
          listStyleType: "none",
          listStyle: "none",
        }}
        // style={styles.cardContainer}
      >
        <div className="textBox">
        <p className="HomePagetitle">Welcome Otaku!</p>
        <p className="HomePageFirstText">
          In this website you can manage all your manga collection!{" "}
        </p>
        <p className="HomePageText">
          <ul>
            <li>Register all the titles you have and easily filter them</li>
            <li>
              Manage the mangas you are reading and in which volume you have
              stopped
            </li>
            <li>
              Easily manage how many volumes you own and check which collections
              are complete.
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
        </p>
        </div>
      </Card>
  
      {/* <Card 
        sx={{
          marginTop: 2,
          height: 580,
          width: '50%',
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          

        }}
      > */}
        {/* <img className="imgHomePage"
          src="library.jpg"
          alt="library"
          /> */}
         
    </div>
  );
}

