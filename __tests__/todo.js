/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should check retrieval of overdue items", () => {
    let overdueTodos = overdue();
    dueDate = new Date().toLocaleDateString("en-CA");
    for (i = 0; i < overdueTodos.length; i++) {
      expect(overdueTodos[i].dueDate < dueDate).toBe(true);
    }
  });

  test("Should check retrieval of due today items", () => {
    let duetodayTodos = dueToday();
    dueDate = new Date().toLocaleDateString("en-CA");
    for (i = 0; i < duetodayTodos.length; i++) {
      expect(duetodayTodos[i].dueDate === dueDate).toBe(true);
    }
  });

  test("Should check retrieval of due later items", () => {
    let dueLaterTodos = dueLater();
    dueDate = new Date().toLocaleDateString("en-CA");
    for (i = 0; i < dueLaterTodos.length; i++) {
      expect(dueLaterTodos[i].dueDate > dueDate).toBe(true);
    }
  });
});
