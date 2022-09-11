import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({list}) => {
  return (
    list.map((item, index) => {
      return(
        <Tile key={index} index={index} item={item} />
      )
    })
  );
};
