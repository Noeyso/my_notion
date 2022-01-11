import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
  				<div class="imageHolder"><img class="imgeThumbnail" /></div>
					<h2 class="imageTitle"></h2></section>`);

    const imageElement = this.element.querySelector(
      ".imgeThumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".imageTitle"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
