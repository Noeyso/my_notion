import { BaseComponent } from "../../component.js";

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="note">
  				<h2 class="noteTitle"></h2>
  				<p class="noteBody"></p>
					</section>`);

    const titleElement = this.element.querySelector(
      ".noteTitle"
    )! as HTMLElement;
    titleElement.textContent = title;

    const bodyElement = this.element.querySelector(
      ".noteBody"
    )! as HTMLParagraphElement;
    bodyElement.textContent = body;
  }
}
