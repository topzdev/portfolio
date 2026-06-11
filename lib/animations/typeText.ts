import { gsap } from "./gsap";

type TypeTextOptions = {
  charDuration?: number;
};

export function createTypeText(
  element: HTMLElement,
  text: string,
  options: TypeTextOptions = {},
): gsap.core.Timeline {
  const charDuration = options.charDuration ?? 0.07;
  const timeline = gsap.timeline();

  element.textContent = "";

  for (let index = 0; index < text.length; index += 1) {
    const slice = text.slice(0, index + 1);
    timeline.call(() => {
      element.textContent = slice;
    });
    if (index < text.length - 1) {
      timeline.to({}, { duration: charDuration });
    }
  }

  return timeline;
}

export function createDeleteText(
  element: HTMLElement,
  options: TypeTextOptions = {},
): gsap.core.Timeline {
  const charDuration = options.charDuration ?? 0.04;
  const fullText = element.textContent ?? "";
  const timeline = gsap.timeline();

  for (let index = fullText.length; index >= 0; index -= 1) {
    const slice = fullText.slice(0, index);
    timeline.call(() => {
      element.textContent = slice;
    });
    if (index > 0) {
      timeline.to({}, { duration: charDuration });
    }
  }

  return timeline;
}
