import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos.js";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const TodoList = () => {
  const dispatch = useDispatch();
  // 액션 디스패치 함수를 가져오기
  const todos = useSelector((state) => state.todos.todos);
  // 선택된 Todo 가져오기

  const clickDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  }; // Todo 삭제 액션 디스패치

  const clickToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  }; // Todo 상태 변경 액션 디스패치

  return (
    <StListContainer>
      {["WORKING", "DONE"].map((status) => (
        <React.Fragment key={status}>
          <StListTitle>{status === "WORKING" ? "WORKING LIST" : "DONE LIST"}</StListTitle>
          <StTodoWrap>
            {todos.map((t) => {
              if ((status === "WORKING" && !t.isDone) || (status === "DONE" && t.isDone)) {
                // 상태에 따라 WorkingTodo / DoneTodo 필터링 작업
                return (
                  <StTodoContainer key={t.id}>
                    <StLink to={`/${t.id}`} key={t.id}>
                      {/* 선택된 Todo 상세 페이지 이동 링크 */}
                      <StDetailBtn>상세보기</StDetailBtn>
                    </StLink>
                    <StTodoList>
                      <StTodoTitle>{t.title}</StTodoTitle>
                      <StTodoContents>{t.contents}</StTodoContents>
                    </StTodoList>
                    <StBtns>
                      <StDelBtn onClick={() => clickDeleteTodo(t.id)}>삭제하기</StDelBtn>
                      <StDoneBtn onClick={() => clickToggleStatusTodo(t.id)}>{t.isDone ? "취소" : "완료"}</StDoneBtn>
                    </StBtns>
                  </StTodoContainer>
                );
              } else {
                return null;
              }
            })}
          </StTodoWrap>
        </React.Fragment>
      ))}
    </StListContainer>
  );
};

export default TodoList;

const StListContainer = styled.div`
  padding: 0 3.4375rem;
`;

const StListTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;

  margin: 25px;
`;

const StTodoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const StTodoContainer = styled.div`
  width: 330px;
  min-height: 180px;

  margin-bottom: 15px;

  border: 3px solid #4f4557;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  word-break: break-all;
`;

const StLink = styled(Link)`
  text-decoration: none;
  float: right;
`;

const StDetailBtn = styled.button`
  display: absolute;
  float: right;
  font-size: 15px;
  border: none;
  cursor: pointer;
  padding-top: 5px;
  padding-right: 25px;
  background-color: transparent;
`;

const StTodoList = styled.div`
  padding-left: 20px;
`;

const StTodoTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  padding: 5px 10px;
`;

const StTodoContents = styled.div`
  font-size: 18px;
  padding: 5px 10px;
`;

const StBtns = styled.div`
  width: 85%;
  padding: 20px 25px 15px;

  display: flex;

  gap: 15px;
`;

const StDelBtn = styled.button`
  width: 50%;
  height: 40px;

  background-color: transparent;

  border: 2px solid #f16767;
  border-radius: 5px;

  font-size: 15px;
  cursor: pointer;
`;

const StDoneBtn = styled.button`
  width: 50%;
  height: 40px;

  background-color: transparent;

  border: 2px solid #a459d1;
  border-radius: 5px;

  font-size: 15px;
  cursor: pointer;
`;
