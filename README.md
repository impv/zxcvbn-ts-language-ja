# @impv/zxcvbn-ts-language-ja

This is a Japanese language pack for [zxcvbn-ts](https://github.com/zxcvbn-ts/zxcvbn). Currently, this package provides feedbacks translation only.

## Installation

```sh
# NPM
npm i @impv/zxcvbn-ts-language-ja

# Yarn
yarn add @impv/zxcvbn-ts-language-ja

# pnpm
pnpm i @impv/zxcvbn-ts-language-ja
```

## Usage

As this package provide neither dictionaries nor keyboard patterns, we recommend you to use common ones and/or English ones.

```ts
import { zxcvbn, ZxcvbnOptions } from "@zxcvbn-ts/core";
import zxcvbnCommonPackage from "@zxcvbn-ts/language-common";
import zxcvbnEnPackage from "@zxcvbn-ts/language-en";
// You can't default-import the package because we use Named Exports.
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
