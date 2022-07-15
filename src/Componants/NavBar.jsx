import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Card, CardContent, Button, Badge } from "@mui/material"
import { Link } from "react-router-dom";
export const NavBar = () => {
    const dispach = useDispatch();
    const bulbStatus = useSelector((state => state.gameReducer.bulb))
    const cricTeam = useSelector((state => state.gameReducer.cricketTeam))
    const footTeam = useSelector((state => state.gameReducer.footballTeam))
    const handleoff = () => {
        dispach({
            type: "bulb",
            payload: " ",
        })
    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={1.8}>
                    <Link to="/8th">
                        <Card>
                            <CardContent>
                                Class VIII
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={1.8}>
                    <Link to="/9th">
                        <Card>
                            <CardContent>
                                Class IX
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={1.8}>
                    <Link to="/10th">
                        <Card>
                            <CardContent>
                                Class X
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={1.8}>
                    <Link to="/cricinfo">
                        <Card>
                            <CardContent>
                                <Badge color="error" badgeContent={cricTeam.length}>
                                    Cricket Team
                                </Badge>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={1.8}>
                    <Link to="/footinfo">
                        <Card>
                            <CardContent>
                                <Badge color="error" badgeContent={footTeam.length}>
                                    Football Team
                                </Badge>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid> <Grid item xs={1.8}>
                    <Link to="/coachinfo">
                        <Card>
                            <CardContent>
                                Coches
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={0.1}></Grid>
                <Grid xs={1}>
                    <Button variant="contained" color={bulbStatus ? "success" : "error"} onClick={handleoff}> {bulbStatus ? "On" : "Off"}</Button>

                </Grid>
            </Grid>
        </div>
    )
}