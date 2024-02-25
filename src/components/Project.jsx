import { Card, CardActions, CardContent, CardMedia } from "@mui/material"
import githubLogo from '../assets/github-mark.svg';

const Project = ({projectName, gitHubURL}) => {
    return (
        <Card>
            <CardMedia/>
            <CardContent>
                <h2>{projectName}</h2>
            </CardContent>
            <CardActions>
                <a href={gitHubURL} target="_blank">
                    <img src={githubLogo} className="logo" alt="GitHub Logo" />
                </a>
            </CardActions>
        </Card>
    )
}

export default Project