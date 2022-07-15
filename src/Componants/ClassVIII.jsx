import React from "react";
import { Grid } from "@mui/material"
import { StudentItem } from "./StudentItem"
import { useSelector } from "react-redux";
export const ClassVIII = () => {
  const bulbStatus = useSelector(state => state.gameReducer.bulb)
  const students = [
    {
      name: "Sujata Sinha",
      phy: 7,
      skill: 8,
    },
    {
      name: "Amit Kumar",
      phy: 6,
      skill: 9,
    },
    {
      name: "Umar Khan",
      phy: 9,
      skill: 6,
    },
    {
      name: "Sumit Kadarkar",
      phy: 7,
      skill: 7,
    },
    {
      name: "Kishore Kumar",
      phy: 5,
      skill: 7,
    },
    {
      name: "Saurabh Kadarkar",
      phy: 7,
      skill: 8,
    },
    {
      name: "Kishore Yidke",
      phy: 6,
      skill: 7,
    },
  ];
  return (
    <div>
      {bulbStatus && <h1>Class VIII</h1>}
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