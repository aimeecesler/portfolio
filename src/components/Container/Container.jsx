import React from "react";

const Container = (props) => {
  return (
    <main className={props.className}>
      <div className="container-fluid mb-5">{props.children}</div>
    </main>
  );
};

export default Container;
