# @impv/zxcvbn-ts-language-ja

- [English](./README.md)

[zxcvbn-ts](https://github.com/zxcvbn-ts/zxcvbn)の日本語パックです。現状は日本語化されたフィードバックメッセージのみ利用できます。

## インストール方法

```sh
# NPM
npm i @impv/zxcvbn-ts-language-ja

# Yarn
yarn add @impv/zxcvbn-ts-language-ja

# pnpm
pnpm i @impv/zxcvbn-ts-language-ja
```

## 使い方

このパッケージは辞書もキーボードレイアウトも提供していないため、 `@zxcvbn-ts/language-common` や `@zxcvbn-ts/language-en` のものを利用してください。

```ts
import { zxcvbn, ZxcvbnOptions } from "@zxcvbn-ts/core";
import zxcvbnCommonPackage from "@zxcvbn-ts/language-common";
import zxcvbnEnPackage from "@zxcvbn-ts/language-en";
// 名前付きエクスポートを利用しているため、@zxcvbn-ts/* のパッケージと違いデフォルトインポートはできません
import * as zxcvbnJaPackage from "@impv/zxcvbn-ts-language-ja";

const password = "somePassword";
const options = {
  translations: zxcvbnJaPackage.translations,
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  },
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
};

ZxcvbnOptions.setOptions(options);

zxcvbn(password);
```
