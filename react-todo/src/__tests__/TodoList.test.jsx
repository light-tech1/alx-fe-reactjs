import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList.jsx";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

    test("adds a new todo", async () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("New todo");
    const addButton = screen.getByText("Add");

    await userEvent.type(input, "Test new todo");
    await userEvent.click(addButton);

    expect(await screen.findByText("Test new todo")).toBeInTheDocument();
  });


  test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    expect(todo).not.toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
