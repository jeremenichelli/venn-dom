# venn-dom

[![Build Status](https://travis-ci.org/jeremenichelli/venn-dom.svg?branch=master)](https://travis-ci.org/jeremenichelli/venn-dom)

Utility to detect whether DOM elements are overlapping or not in the viewport 


## Table of contents


## Motivations

After rewriting several approaches to solve this situation in different projects, I decided to put it in a package so I can consume it every time I needed. Really cool for simple web games where you need to check if elements are sharing at least the minimum possible amount of area in the viewport.


## Installation

Add it to your application using a package manager.

```sh
# npm
npm i venn-dom --save

# yarn
yarn add venn-dom
```

## Usage

### Compare two elements

The most simple usage is to compare two elements against each other.

```js
import venn from 'venn-dom'

const base = document.querySelector('.base--element')
const compare = document.querySelector('.compare--element')

venn(base, compare)
// -> Boolean
```

### Compare one element against a collection

You can also pass an array of elements or node list. The library will return an array containing one boolean per each element in the collection, representing the state of interception between the base element with the one from the collection in the same position.

```js
import venn from 'venn-dom'

const base = document.querySelector('.base--element')
const list = document.querySelectorAll('.compare--element')

venn(base, list)
// -> Array
```

Example from above would also work with `Array` or `HTMLCollection` instances.

## Contributing

- Clone or fork this repository.
- In the root folder, run `yarn` to install the dependencies.
- Apply your fixes or features.

_Update or add tests if necessary._

- Run `yarn test` to make sure there's no regression.
- Submit a PR 🎉

_You can do `yarn test --watch` when working on TDD mode._

### Stuff to do

The library is on early stages, if you want to collaborate, here are some ideas:

- Add better unit tests mocking client rects.
- Add linting and precommit hooks.
 - The library is using [standard](https://github.com/standard/standard) and [this format](https://conventionalcommits.org/) for commits.
- Run the library on some real scenarios and check out if there are issues to solve.
- Audit and apply performacne improvements if necessary.
- Any feature you think is missing ⭐️
