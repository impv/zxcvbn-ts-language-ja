import { zxcvbn, ZxcvbnOptions } from "@zxcvbn-ts/core";
import zxcvbnCommon from "@zxcvbn-ts/language-common";
import zxcvbnEn from "@zxcvbn-ts/language-en";
import * as zxcvbnJa from "../esm";

ZxcvbnOptions.setOptions({
  translations: zxcvbnJa.translations,
  graphs: zxcvbnCommon.adjacencyGraphs,
  dictionary: {
    ...zxcvbnCommon.dictionary,
    ...zxcvbnEn.dictionary,
    japanese: ["hoge", "fuga", "piyo"],
  },
});

function renderList(ul: HTMLUListElement, items: readonly string[]) {
  const diff = items.length - ul.childNodes.length;
  if (diff > 0) {
    for (let i = 0; i < diff; i++) {
      const li = document.createElement("li");
      ul.appendChild(li);
    }
  } else if (diff < 0) {
    for (let i = diff; i < 0 && ul.lastChild; i++) {
      ul.removeChild(ul.lastChild);
    }
  }

  for (let i = 0, l = items.length; i < l; i++) {
    ul.childNodes.item(i).textContent = items[i];
  }
}

function scoreToText(score: number): string {
  switch (score) {
    case 0:
      return "非常に簡単に推測可能 (score=0)";
    case 1:
      return "簡単に推測可能 (score=1)";
    case 2:
      return "ある程度推測可能 (score=2)";
    case 3:
      return "ある程度安全 (score=3)";
    case 4:
      return "とても安全 (score=4)";
    default:
      return `--- (score=${score})`;
  }
}

function start(el: HTMLInputElement) {
  const warnings = document.getElementById("warning") as HTMLUListElement;
  const suggestions = document.getElementById(
    "suggestions"
  ) as HTMLUListElement;
  const warningLabel = document.getElementById(
    "warning_label"
  ) as HTMLSpanElement;
  const suggestionsLabel = document.getElementById(
    "suggestions_label"
  ) as HTMLSpanElement;
  const scoreIndicator = document.getElementById("score_indicator");
  const scoreText = document.getElementById("score_text");

  el.addEventListener("input", (ev) => {
    const { value } = ev.currentTarget as HTMLInputElement;
    const text = String(value);

    const { feedback, score } = zxcvbn(text);

    renderList(warnings, feedback.warning ? [feedback.warning] : []);
    renderList(suggestions, feedback.suggestions);

    const warningsCount = feedback.warning ? 1 : 0;
    const suggestionsCount = feedback.suggestions.length;

    warningLabel.textContent = `警告 (${warningsCount})`;
    suggestionsLabel.textContent = `推奨 (${suggestionsCount})`;

    scoreIndicator.setAttribute("data-score", "*".repeat(score + 1));
    scoreText.textContent = scoreToText(score);
  });
}

start(document.getElementById("input") as HTMLInputElement);
