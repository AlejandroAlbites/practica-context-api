import React, { useContext } from "react";
import { DataContext } from "../store/DataContext";

export const ButtonComponents = () => {
  const getData = useContext(DataContext);
  return (
    <div>
      <button onClick={getData.handleGetApi}>Get Data</button>
    </div>
  );
};
