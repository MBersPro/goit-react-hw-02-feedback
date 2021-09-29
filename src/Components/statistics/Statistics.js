import React from "react";
import Notification from "./notification/Notification";

const Statistics = ({ state, total, percentage }) => {
  return (
    <ul>
      {total() ? (
        <>
          {state.map((item) => (
            <li>
              {item[0]}: {item[1]}
            </li>
          ))}
          <li>total: {total()}</li>
          <li>Positive feedback: {percentage()}%</li>
        </>
      ) : (
        <Notification/>
      )}
    </ul>
  );
};

export default Statistics;
