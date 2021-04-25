import React, { Component } from "react";

export default class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; //ref를 설정할 부분

  // 초기 state를 설정할 수 있다.
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // props로 받아 온 값을 state에 동기화시키는  용도로 사용
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: prevState.color };
    }
    return null;
  }

  // 첫 랜더링을 마친 후 실행 // 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 비동기 작업을 처리
  componentDidMount() {
    console.log("componentDidMount");
  }

  // props, state를 변경했을 때 리렌더링을 시작할지 여부를 지정하는 메서드  // true or false 반환
  // 컴포넌트 업데이트의 성능을 개선할 때 매우 중요
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4; //마지막 자리 수가 4이면 false
  }

  // DOM에서 제거할 때 실행 // 제거 작업
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 리렌더링이 완료한 후 실행
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상: ", snapshot);
    }
  }

  // 컴포넌트 모양새를 정의 // 필수 메서드
  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
