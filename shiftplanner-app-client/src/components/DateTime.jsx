import React from "react";
import moment from "moment";

function DateTime() {
  const formattedDate = moment().format("dddd Do");

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
}

export default DateTime;