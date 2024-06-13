import { render, screen } from "@testing-library/react";
import App from "./App";

test("기본 테스트 예시", () => {

  beforeEach(() => {
    console.log("테스트 전에 진행될 코드")
  })

  expect(1 + 2).toBe(3)

  afterEach(() => {
    console.log("테스트 후에 진행될 코드")
  })

})

test("app", () => {

  render(<App />);
  expect(screen.getByText("hello world!")).toBeVisible()

});