import React from "react";

export default function NameList() {
  const name = ["Bruce", "Clark", "Diana", "Bruce"];
  const nameList = name.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}
