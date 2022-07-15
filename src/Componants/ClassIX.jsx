import React from "react";
import { Grid } from "@mui/material"
import { StudentItem } from "./StudentItem"
import { useSelector } from "react-redux";
export const ClassIX = () => {
  const bulpstatus = useSelector(state => state.gameReducer.bulb)
  const students = [
    {
      name: "Pravin Sinha",
      phy: 9,
      skill: 9,
    },
    {
      name: "Saurab Kumar",
      phy: 8,
      skill: 9,
    },
    {
      name: "Taleeb Khan",
      phy: 9,
      skill: 8,
    },
    {
      name: "Soham Kadarkar",
      phy: 8,
      skill: 8,
    },
    {
      name: "Nimeesh Kumar",
      phy: 9,
      skill: 8,
    },
    {
      name: "Saurabh Kadarkar",
      phy: 7,
      skill: 8,
    },
    {
      name: "Nimeesh Sanap",
      phy: 8,
      skill: 8,
    },
  ];
  return (
    <div>
      <h1>Class IX - {bulpstatus?"ON":"Off"}</h1>
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