import React from "react";
import { Grid } from "@mui/material"
import { StudentItem } from "./StudentItem"
import { useSelector } from "react-redux";
export const ClassX = () => {
  const bulbStatus = useSelector(state => state.gameReducer.bulb)
  const students = [
    {
      name: "Pavan Sinha",
      phy: 8,
      skill: 8,
    },
    {
      name: "Suresh Kumar",
      phy: 7,
      skill: 8,
    },
    {
      name: "Danish Khan",
      phy: 9,
      skill: 8,
    },
    {
      name: "Dinesh Kadarkar",
      phy: 9,
      skill: 9,
    },
    {
      name: "Kishore Kumar",
      phy: 6,
      skill: 7,
    },
    {
      name: "Dinesh kar",
      phy: 9,
      skill: 7,
    },
    {
      name: "Rayan Kumar",
      phy: 7,
      skill: 7,
    },
  ];
  return (
    <div>
      <h1>Class X - {bulbStatus ? (<img src="/onn.jfif" width="35px" hight="40px"/>) : (<img src="/off.jfif" width="35px" hight="40px"/>)}</h1>
      <Grid container spacing={4}>
        {students.map((item) => (
          <Grid item xs={3} className="main">
            <StudentItem item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}