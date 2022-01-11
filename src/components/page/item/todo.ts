import { BaseComponent } from "../../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
  				<h2 class="todoTitle"></h2>
  				<input type="checkbox" class="todoCheckBox">
					</section>`);

    const titleElement = this.element.querySelector(
      ".todoTitle"
    )! as HTMLElement;
    titleElement.textContent = title;

    const todoElement = this.element.querySelector(
      ".todoCheckBox"
    )! as HTMLInputElement;
    todoElement.insertAdjacentText("afterend", todo);
  }
}
