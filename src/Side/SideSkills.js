import React, { Component } from "react";

import {
  Grid,
  Divider,
  Typography,
  Collapse,
  ListItem,
} from "@material-ui/core";

import ColoredDivider from "../Components/ColoredDivider";
import data from "../JoseVelarde.json";

class SideSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: window.innerWidth < 900 ? false : true,
    };
  }
  handleClick = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };
  updateDimensions = () => {
    if (window.innerWidth < 900) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  };

  render() {
    return (
      <Grid container rowSpacing={1.5}>
        <Grid item xs={12} md={12} lg={12} sx={{ display: "flex" }}>
          <ListItem button onClick={this.handleClick}>
            <ColoredDivider
              sx={{ flexGrow: "1", height: "1px", alignSelf: "center" }}
            />
            <Typography
              variant="h5"
              px={1}
              sx={{ alignSelf: "center", letterSpacing: "0.15rem" }}
            >
              Skills
            </Typography>
            <ColoredDivider
              sx={{ flexGrow: "1", height: "1px", alignSelf: "center" }}
            />
          </ListItem>
        </Grid>
        <Collapse
          in={this.state.open}
          timeout="auto"
          unmountOnExit
          sx={{ width: "100%" }}
        >
          {data.Filler.Skills.map((skill, index) => (
            <Grid
              item
              container
              key={"skill" + index}
              px={3}
              sx={{ display: "flex", justifyContent: "space-between" }}
              rowSpacing={1}
            >
              <Grid
                item
                xs={8}
                md={8}
                lg={8}
                sx={{ textAlign: "start", alignSelf: "center" }}
              >
                <Typography variant="subtitle1" fontWeight="600">
                  {skill["Skill"]}
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                md={4}
                lg={4}
                sx={{ textAlign: "end", alignSelf: "center" }}
              >
                <Typography variant="subtitle1" color="text.secondary">
                  {skill["Level"]}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                {index === data.Filler.Skills.length - 1 ? null : (
                  <Divider variant="center" />
                )}
              </Grid>
            </Grid>
          ))}
        </Collapse>
      </Grid>
    );
  }
}

export default SideSkills;
