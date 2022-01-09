export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML = `<section class="image">
  <div class="imageHolder"><img class="imgeThumbnail" /></div>
	<p class="imageTitle"></p></section>`;

    this.element = template.content.firstElementChild! as HTMLElement;
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
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
