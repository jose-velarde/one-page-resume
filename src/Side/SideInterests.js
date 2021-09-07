import React, { Component } from "react";

import { Grid, Typography, Collapse, ListItem } from "@material-ui/core";

import ColoredDivider from "../Components/ColoredDivider";
import RandomColorChip from "../Components/RandomColorChip";
import data from "../JoseVelarde.json";

class SideInterests extends Component {
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
              Interests
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
          <Grid item px={3}>
            {data.Filler.Interests.map((interest, index) => (
              <RandomColorChip
                key={"interest" + index}
                label={interest}
                sx={{ typography: "body1", margin: "3px" }}
              />
            ))}
          </Grid>
        </Collapse>
      </Grid>
    );
  }
}

export default SideInterests;
