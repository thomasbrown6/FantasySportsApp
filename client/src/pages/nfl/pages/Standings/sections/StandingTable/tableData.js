import Box from "./Components/Box";
import boxLogo from "../../../../assets/boxLogo.svg";
import Paper from "@material-ui/core/Paper";
import React from 'react'
import classes2 from "./StandingTable.module.css";
const matchUp = (teamName, logo) => (
  <div className={classes2.matchupFlex}>
    <div className={classes2.box1}>
      <Box type="red" />
      <img src={logo} className={classes2.boxLogo} width="35px" alt="boxLogo" />
    </div>
    <p className={classes2.teamName}>{teamName}</p>
  </div>
);
export const tableData1 = [
  {
    teamName: "AFC EAST",
    match: [
      {
        afc: matchUp("Buffalo", boxLogo),
        w: 5,
        l: 2,
        t: 0,
        pct: 0.0715,
        home: "2-1",
        away: "3-1",
        div: "3-0",
        conf: "4-2",
        pf: 174,
        pa: 178,
        diff: -4,
        strk: "W1",
      },
      {
        afc: matchUp("Buffalo", boxLogo),
        w: 5,
        l: 2,
        t: 0,
        pct: 0.0715,
        home: "2-1",
        away: "3-1",
        div: "3-0",
        conf: "4-2",
        pf: 174,
        pa: 178,
        diff: -4,
        strk: "W1",
      },
    ],
  },
  {
    teamName: "AFC NORTH",
    match: [
      {
        afc: matchUp("Buffalo", boxLogo),
        w: 5,
        l: 2,
        t: 0,
        pct: 0.0715,
        home: "2-1",
        away: "3-1",
        div: "3-0",
        conf: "4-2",
        pf: 174,
        pa: 178,
        diff: -4,
        strk: "W1",
      },
    ],
  },
  {
    teamName: "AFC SOUTH",
    match: [
      {
        afc: matchUp("Buffalo", boxLogo),
        w: 5,
        l: 2,
        t: 0,
        pct: 0.0715,
        home: "2-1",
        away: "3-1",
        div: "3-0",
        conf: "4-2",
        pf: 174,
        pa: 178,
        diff: -4,
        strk: "W1",
      },
    ],
  },
  {
    teamName: "AFC WEST",
    match: [
      {
        afc: matchUp("Buffalo", boxLogo),
        w: 5,
        l: 2,
        t: 0,
        pct: 0.0715,
        home: "2-1",
        away: "3-1",
        div: "3-0",
        conf: "4-2",
        pf: 174,
        pa: 178,
        diff: -4,
        strk: "W1",
      },
    ],
  },
];

export const tableData2 = [
  {
    teamName: "NFC EAST",
    match: [
      {
        afc: matchUp("Buffalo", boxLogo),
        w: 5,
        l: 2,
        t: 0,
        pct: 0.0715,
        home: "2-1",
        away: "3-1",
        div: "3-0",
        conf: "4-2",
        pf: 174,
        pa: 178,
        diff: -4,
        strk: "W1",
      },
      {
        afc: matchUp("Buffalo", boxLogo),
        w: 5,
        l: 2,
        t: 0,
        pct: 0.0715,
        home: "2-1",
        away: "3-1",
        div: "3-0",
        conf: "4-2",
        pf: 174,
        pa: 178,
        diff: -4,
        strk: "W1",
      },
    ],
  },
  {
    teamName: "NFC NORTH",
    match: [
      {
        afc: matchUp("Buffalo", boxLogo),
        w: 5,
        l: 2,
        t: 0,
        pct: 0.0715,
        home: "2-1",
        away: "3-1",
        div: "3-0",
        conf: "4-2",
        pf: 174,
        pa: 178,
        diff: -4,
        strk: "W1",
      },
    ],
  },
  {
    teamName: "NFC SOUTH",
    match: [
      {
        afc: matchUp("Buffalo", boxLogo),
        w: 5,
        l: 2,
        t: 0,
        pct: 0.0715,
        home: "2-1",
        away: "3-1",
        div: "3-0",
        conf: "4-2",
        pf: 174,
        pa: 178,
        diff: -4,
        strk: "W1",
      },
    ],
  },
  {
    teamName: "NFC WEST",
    match: [
      {
        afc: matchUp("Buffalo", boxLogo),
        w: 5,
        l: 2,
        t: 0,
        pct: 0.0715,
        home: "2-1",
        away: "3-1",
        div: "3-0",
        conf: "4-2",
        pf: 174,
        pa: 178,
        diff: -4,
        strk: "W1",
      },
    ],
  },
];
