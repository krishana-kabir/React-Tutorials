import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Message from "./component/Message";
import Counter from "./component/Counter";
import FunctionClick from "./component/FunctionClick";
import ClassClick from "./component/ClassClick";
import EventBind from "./component/EventBind";
import ParentComponent from "./component/ParentComponent";
import UserGreeting from "./component/UserGreeting";
import NameList from "./component/NameList";
import Stylesheet from "./component/Stylesheet";
import "./appStyle.css";
import style from "./appStyle.module.css";
import Form from "./component/Form";
import LifecycleA from "./component/LifecycleA";
import LifecycleAA from "./component/LifecycleAA";
class App extends Component {
  render() {
    return (
      <div className="App">
        <LifecycleAA></LifecycleAA>
        {/*<Counter></Counter>
         <LifecycleA></LifecycleA>
        <Form></Form>
        <h1 className="error">Error</h1>
        <h1 className={style.success}>success</h1>
        <Stylesheet primary={true}></Stylesheet>
        <NameList></NameList>
         <UserGreeting></UserGreeting>
        <ParentComponent></ParentComponent>
        <EventBind></EventBind>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <Greet name="Diana" heroName="Wonder -women"></Greet>
        <Welcome name="Clark" heroName="SuperMan"></Welcome>
        <
         <Greet name="Bruce" heroName="Batman">
          <p>this is children props</p>
        </Greet>
        <Greet name="Clark" heroName="SuperMan">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder -women"></Greet>
        <p>.</p>
        <p>.</p>
        <Welcome name="Bruce" heroName="Batman"></Welcome>
        <Welcome name="Clark" heroName="SuperMan"></Welcome>
    <Welcome name="Diana" heroName="Wonder -women"></Welcome>*/}
        {/*<Hello></Hello>*/}
        {/*<Message></Message>*/}
      </div>
    );
  }
}

export default App;
