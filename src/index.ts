import type { ZxcvbnOptions } from "@zxcvbn-ts/core";

type Translations = typeof ZxcvbnOptions.translations;

export const translations: Translations = {
  warnings: {
    straightRow: "キーボードの連続したキーの並びは推測されやすいです",
    keyPattern: "短いキーパターンは推測されやすいです",
    simpleRepeat: '"aaa"のような同じ文字の繰り返しは推測されやすいです',
    extendedRepeat:
      '"abcabcabc"のような文字パターンの繰り返しは推測されやすいです',
    sequences: '"abc"のようなよく使われる文字列は推測されやすいです',
    recentYears: "年は推測されやすいです",
    dates: "日付は推測されやすいです",
    topTen: "非常に頻繁に利用されるパスワードです",
    topHundred: "頻繁に利用されるパスワードです",
    common: "利用されることの多いパスワードです",
    similarToCommon: "よく利用されるパスワードです",
    wordByItself: "1単語だけだと推測されやすいです",
    namesByThemselves: "名前だけだと推測されやすいです",
    commonNames: "一般的な名前は推測されやすいです",
    userInputs: "入力した情報に関係する文字列は含めないでください",
  },
  suggestions: {
    l33t: '"a"を"@"に変えるような、文字を記号で置き換えるのは避けましょう',
    reverseWords: "よく使われる単語を逆に書くのは避けましょう",
    allUppercase: "すべて大文字にするのは避けましょう",
    capitalization: "先頭の文字以外にも大文字を混ぜましょう",
    dates: "あなたに関する年や日付を含めないようにしましょう",
    recentYears: "年を含めないようにしましょう",
    associatedYears: "あなたに関する年を含めないようにしましょう",
    sequences: "よく使われる文字列を含めないようにしましょう",
    repeated: "文字や単語を繰り返さないようにしましょう",
    longerKeyboardPattern:
      "長いキーパターンを使い、途中で何回かパターンの方向を変えましょう",
    anotherWord: "あまり使われない単語をもっと含めましょう",
    useWords: "よく使われる文章を避けつつ、複数の単語を含めましょう",
    noNeed:
      "記号や数字、大文字を混ぜなくても推測されにくいパスワードは作れます",
  },
  timeEstimation: {
    ltSecond: "1秒未満",
    second: "{base}秒",
    seconds: "{base}秒",
    minute: "{base}分",
    minutes: "{base}分",
    hour: "{base}時間",
    hours: "{base}時間",
    day: "{base}日",
    days: "{base}日",
    month: "{base}ヶ月",
    months: "{base}ヶ月",
    year: "{base}年",
    years: "{base}年",
    centuries: "数百年",
  },
};
