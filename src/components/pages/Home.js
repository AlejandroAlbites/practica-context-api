import React, { useContext } from "react";
import { DataContext } from "../../store/DataContext";

import { ButtonComponents } from "../ButtonComponents";

export const Home = () => {
  const showData = useContext(DataContext);

  return (
    <div>
      <ButtonComponents />
      {showData.data.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};
