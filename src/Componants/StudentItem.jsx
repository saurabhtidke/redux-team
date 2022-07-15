import React from "react"
import { Grid, Card, CardContent, Button } from "@mui/material"
import { AccountBox } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"

export const StudentItem = ({ item }) => {
    const dispatch = useDispatch();
    const cricTeam = useSelector(state => state.gameReducer.cricketTeam)
    const handleCricket = (curr) => {
            if (cricTeam.length < 11)
                dispatch({
                    type: "cricketTeam",
                    payload: curr,
                })
        
    }
    const dispatc = useDispatch();
    const footTeam = useSelector(state => state.gameReducer.footballTeam)
    const handleFootball = (curr) => {
       if (footTeam.length < 11)
            dispatc({
                type: "footballTeam",
                payload: curr,
            })
        }
    
    return (

        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <AccountBox />
                    </Grid>
                    <Grid item xs={8}>
                        <span>{item.name}</span>
                    </Grid>
                    <Grid item xs={6}>
                        <span>Physical : {item.phy}</span>
                    </Grid>
                    <Grid item xs={6}>
                        <span> Skills : {item.skill}</span>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={() => handleCricket(item)} color="primary" variant="contained" disabled={cricTeam.some(play => play.name === item.name)}>Cricket</Button>

                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={() => handleFootball(item)} color="secondary" variant="contained" disabled={footTeam.some(play => play.name === item.name)}>Football</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    )
}
