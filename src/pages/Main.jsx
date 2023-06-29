import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Form from "../components/Form";
import TodoList from "../components/TodoList";

const Main = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <TodoList />
    </Layout>
  );
};

export default Main;
