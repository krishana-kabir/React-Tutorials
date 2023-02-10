import React from "react";
// using arrow function
/*const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        hello {props.name} a.k.a{props.heroName}
      </h1>
      {props.children}
    </div>
  );
};*/

// destructing method 1
/*const Greet = ({ name, heroName }) => {
  return (
    <div>
      <h1>
        hello {name} a.k.a{heroName}
      </h1>
    </div>
  );
};*/

// destruing method 2
const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        hello {props.name} a.k.a{props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
