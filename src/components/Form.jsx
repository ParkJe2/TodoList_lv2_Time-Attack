import React, { useState } from "react";
import uuid from "react-uuid";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { newTodo } from "../redux/modules/todos";

const Form = () => {
  const id = uuid();
  const dispatch = useDispatch();
  // 액션 디스패치 함수 가져오기

  // todo 상태 / 업데이트 함수 선언
  const [todo, setTodo] = useState({
    id,
    title: "",
    contents: "",
    isDone: false,
  });

  // 제목&내용 입력 필드 변경 핸들러
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    // 입력 필드 값 업데이트
    setTodo({ ...todo, [name]: value });
  };

  // 등록 버튼 클릭 핸들러
  const clickAddBtnHandler = (e) => {
    e.preventDefault();
    // 불필요한 새로고침 동작 막기

    // 제목 & 내용이 비어있을 경우 알럿창 띄우기
    if (!todo.title) return alert("제목을 입력해주세요");
    if (!todo.contents) return alert("내용을 입력해주세요");

    // 새로운 todo를 추가하기 위해 newTodo 액션 디스패치
    dispatch(newTodo({ ...todo, id }));

    // 입력 필드 초기화
    setTodo({
      id,
      title: "",
      contents: "",
      isDone: false,
    });
  };

  return (
    <StAddForm onSubmit={clickAddBtnHandler}>
      <StGroup>
        <StAddInput name="title" value={todo.title} placeholder="제목을 입력해주세요" onChange={inputChangeHandler} />
        <StAddInput name="contents" value={todo.contents} className="input-content" placeholder="내용을 입력해주세요" onChange={inputChangeHandler} />
        <StAddBtn onClick={clickAddBtnHandler}>추가하기</StAddBtn>
      </StGroup>
    </StAddForm>
  );
};

export default Form;

const StAddForm = styled.form`
  width: 100%;
  height: 130px;

  border-radius: 10px;
  margin-bottom: 1.875rem;

  background-color: #e8e2e2;
`;

const StGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 3.125rem;
`;

const StAddInput = styled.input`
  width: 25%;
  height: 35px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 0 0 5px 15px;
  padding-left: 15px;
  font-size: 15px;
`;

const StAddBtn = styled.button`
  width: 80px;
  height: 35px;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  color: #fff;
  font-size: 15px;

  margin: 0 0 7px 25px;
  background-color: #4f4557;
`;
