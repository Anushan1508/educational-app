import React from "react";

function LessionList({ lessions }) {
  function renderLessions() {
    return lessions.map((lession, i) => {
      return <li key={i}>{lession.name}</li>;
    });
  }

  return (
    <div>
      <ul>{renderLessions()}</ul>
    </div>
  );
}
export default LessionList;