import { MediaData } from "./../dialog.js";
import { BaseComponent } from "./../../component.js";
export class MediaSectionInput
  extends BaseComponent<HTMLElement>
  implements MediaData
{
  constructor() {
    super(`<div class="dialogForm">
            <div class="formContainer">
                <label for="title" class="dialogLabel">Title</label>
                <input type="text" id="title" />
            </div>
            <div class="formContainer">
                <label for="url" class="dialogLabel">URL</label>
                <input type="text" id="url" />
            </div>
        </div>`);
  }

  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }
  get url(): string {
    const element = this.element.querySelector("#url")! as HTMLInputElement;
    return element.value;
  }
}
