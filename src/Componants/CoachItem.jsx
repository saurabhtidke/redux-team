import React from "react"
import { Grid, Card, CardContent, Button } from "@mui/material"
import { AccountBox } from "@mui/icons-material"
import { useDispatch } from "react-redux"

export const CoachItem = ({ item }) => {
    const dispatch = useDispatch();



    return (

        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <AccountBox />
                    </Grid>
                    <Grid item xs={5}>
                        <span>{item}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <Button >Assign</Button>

                    </Grid>

                </Grid>
            </CardContent>
        </Card>

    )
}
