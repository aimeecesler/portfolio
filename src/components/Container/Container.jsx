import React from "react";

const Container = (props) => {
  return (
    <main className={props.className}>
      <div className={props.containerType}>{props.children}</div>
    </main>
  );
};

export default Container;
