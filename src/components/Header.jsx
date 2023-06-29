import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StHeader>
      <ul>
        <StTitle>Todos</StTitle>
        <StSubTitle>React Project</StSubTitle>
      </ul>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.header`
  overflow: hidden;
  margin: 15px 15px 10px;
  color: #4f4557;
`;

const StTitle = styled.li`
  font-size: 50px;
  font-weight: bold;

  padding-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StSubTitle = styled.li`
  float: right;
  font-size: 20px;
`;
