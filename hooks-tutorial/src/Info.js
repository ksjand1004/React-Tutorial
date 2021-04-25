import React, { useEffect, useState, useReducer } from "react";
import useInputs from "./useInputs";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  // useReducer 사용
  const [state, dispatch] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  // useState 사용
  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");

  // 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행
  // useEffect = componentDidMount + componentDidUpdate
  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다.");
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // });

  // 두 번째 파라미터가 []면 렌더링만 // [특정 값] 특정값이 Update될 때
  // useEffect(() => {
  //   console.log("마운트될 때만 실행됩니다.");
  // }, [name]);

  // 뒷정리하기
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanp");
      console.log(name);
    };
  }, [name]);

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeKickname = (e) => {
  //   setNickname(e.target.value);
  // };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input nickname="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
