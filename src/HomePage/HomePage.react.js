import React from "react";
import "./HomePage.css";
import img from "../../src/bloodbank.jpg";
import { Grid, Cell } from "react-mdl";
const HomePage = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img src={img} alt="avatar" className="avatar-img" />
          <br />
          <br />
        </Cell>
      </Grid>
    </div>
  );
};

export default HomePage;