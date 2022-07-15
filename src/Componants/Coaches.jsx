import React from "react";
import { useSelector } from "react-redux";
import { CoachItem } from "./CoachItem";
export const Coaches = () => {
    const cricCoach = useSelector((state) => state.coachReducer.cricketCoaches)
    const footCoach = useSelector((state) => state.coachReducer.footbollCoaches)
    const kabCoach = useSelector((state) => state.coachReducer.kabadiiCoaches)
    return (
        <div>
            <h2>Cricket Coaches</h2>
            {
                cricCoach.map((item) => (
                    <CoachItem item={item} />
                ))
            }
            {/* <h2>Football Coaches</h2>
            {
                footCoach.map((item) => (
                    <CoachItem item={item} />
                ))
            }
            <h2>Kabadii Coaches</h2>
            {
                kabCoach.map((item) => (
                    <CoachItem item={item} />
                ))
            } */}
        </div>
    )
}