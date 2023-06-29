import uuid from "react-uuid";
const New_Todo = "New_Todo";
const Get_Todo_By_Id = "Get_Todo_By_Id";
const Delete_Todo = "Delete_Todo";
const Toggle_Status_Todo = "Toggle_Status_Todo";

// Todo 생성 함수
export const newTodo = (payload) => {
  return {
    type: New_Todo,
    payload,
  };
};

// Todo 삭제 함수
export const deleteTodo = (payload) => {
  return {
    type: Delete_Todo,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: Toggle_Status_Todo,
    payload,
  };
};

// Todo 상태 변경 함수
export const getTodoById = (payload) => {
  return {
    type: Get_Todo_By_Id,
    payload,
  };
};

const initialState = {
  todos: [],
  todo: {
    id: uuid(),
    title: "",
    contents: "",
    isDone: false,
  },
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case New_Todo:
      const newTodo = action.payload;
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case Delete_Todo:
      const deletedTodoId = action.payload;
      const filteredTodos = state.todos.filter((todo) => todo.id !== deletedTodoId);
      return {
        ...state,
        todos: filteredTodos,
      };

    case Toggle_Status_Todo:
      const toggledTodoId = action.payload;
      const updatedTodosToggle = state.todos.map((todo) => {
        if (todo.id === toggledTodoId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: updatedTodosToggle,
      };

    case Get_Todo_By_Id:
      return {
        ...state,
        todo: state.todos.find((t) => {
          return t.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todos;
