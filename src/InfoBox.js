import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";
import numeral from "numeral";

function InfoBox({ title, cases, active, isRed, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "InfoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>
        <Typography className="infoBox__total" color="textSecondary">
          {numeral(total).format("0,0")} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
