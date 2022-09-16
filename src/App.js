import { render } from "@testing-library/react";
import React from "react";

//state는 동적데이터를 다룰때 사용하는 리엑트요소

// function App() {
//   return <div>함수 컴포넌트 </div>;
// }

// class App extends React.Component {
//   render() {
//     return <div>클래스 컴포넌트</div>
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      a: 1,
    };
  }

  증가함수 = () => {
    console.log("증가함수가 호출됨");
    // this.state.count++;
    // this.setState({ a: 2 });
    this.setState((s) => {
      return { count: s.count + 1 };
    });
  };
  감소함수 = () => {
    console.log("감소함수가 호출됨");
    // this.setState({ count: this.state.count - 1 });
    this.setState((s) => {
      return { count: s.count - 1 };
    });
    console.log(this.state.count);
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>카운터:{this.state.count}</h1>
        <button onClick={this.증가함수}>+1</button>
        <button onClick={this.감소함수}>-1</button>
      </div>
    );
  }
}

export default App;
