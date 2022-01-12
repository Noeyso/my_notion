import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
  				<div class="videoPlayer">
    			<iframe class="videoIframe"></iframe>
  				</div>
					<h3 class="pageItemTitle videoTitle"></h3>
					</section>`);

    const iframe = this.element.querySelector(
      ".videoIframe"
    )! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedURL(url); //url->videoId
    console.log(url);

    const titleElement = this.element.querySelector(
      ".videoTitle"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  //정규표현식(Regex) 사용하기
  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    console.log(match);
    const videoId = match ? match[1] || match[2] : undefined;

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
