import React from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { exp } from "../../configs/Experience.js";
import { useStyles } from "./Experience.styles";
import ExperienceCard from "../ExperienceCard/ExperienceCard.component.jsx";

function Experience() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Typography
                className={classes.title}
                variant="h2"
                display="block"
                align="center"
            >
                Work Experience
            </Typography>

            <div className={classes.expContainer}>
                {exp.map(e => {
                    return (
                        <ExperienceCard
                            title={e.title}
                            desc={e.desc}
                            date={e.date}
                            img={e.img}
                        />
                    );
                })}
            </div>
        </React.Fragment>
    );
}

export default Experience;
