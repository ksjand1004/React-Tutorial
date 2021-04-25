import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 ID

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); //nextId 값에 1을 더해 준다.
    setNames(nextNames); //names 값을 업데이트합니다.
    setInputText(""); //inputText를 비운다.
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );

  // <ul>{namesList}</ul>;

  // 단순히 문자열로 이루어진 배열을 사용
  // const names = ["눈사람", "얼음", "눈", "바람"];
  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  // return <ul>{nameList}</ul>;

  // 완전 개노가다
  // return (
  //   <ul>
  //     <li>눈사람</li>
  //     <li>얼음</li>
  //     <li>눈</li>
  //     <li>바람</li>
  //   </ul>
  // );
};

export default IterationSample;
