<div align="center">

# f-rating

<img width="125" alt="Fozzie Bear" src="../../../../bear.png" />



</div>

---

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-rating.svg)](https://badge.fury.io/js/%40justeat%2Ff-rating)
[![CircleCI](https://circleci.com/gh/justeat/fozzie-components.svg?style=svg)](https://circleci.com/gh/justeat/workflows/fozzie-components)
[![Coverage Status](https://coveralls.io/repos/github/justeat/f-rating/badge.svg)](https://coveralls.io/github/justeat/f-rating)
[![Known Vulnerabilities](https://snyk.io/test/github/justeat/f-rating/badge.svg?targetFile=package.json)](https://snyk.io/test/github/justeat/f-rating?targetFile=package.json)

---

## Usage

### Installation

Install the module using npm or Yarn:

```sh
yarn add @justeat/f-rating
```

```sh
npm install @justeat/f-rating
```



### Vue Applications

You can import it in your Vue SFC like this (please note that styles have to be imported separately):

```js
import VRating from '@justeat/f-rating';
import '@justeat/f-rating/dist/f-rating.css';

export default {
    components: {
        VRating
    }
}
```

If you are using Webpack, you can import the component dynamically to separate the `v-rating` bundle from the main `bundle.client.js`:

```js
import '@justeat/f-rating/dist/f-rating.css';

export default {
    components: {
        // …
        VRating: () => import(/* webpackChunkName: "v-rating" */ '@justeat/f-rating')
    }
}
```

## Configuration

### Props

There may be props that allow you to customise its functionality.

The props that can be defined are as follows (if any):

| Prop          |   Type   | Required | Default | Description                                                                                                            | Options |
| :---          |:--------:|:--------:|:-------:|:-----------------------------------------------------------------------------------------------------------------------|---------|
| `starRating`  | `Number` |   Yes    |    -    | Sets the displayed rating (filled stars). i.e. for `2 out of x`, 2 would be the `starRating`                           | -
| `maxStarRating`  | `Number` |    No    |    5    | Sets the maximum number of stars that the rating is set against. i.e. for `x out of 5`, 5 would be the `maxStarRating` | -
| `starRatingSize`  | `String` |    No    | 'small' | Sets the component size. By default the component will use `small`.                                                    | `small` `medium` `large`
| `ratingDisplayType`  | `String` |    No    |  null   | Sets the descriptive text which will be displayed next to the component. By default there will be no text.             | `noRating` `short` `medium` `long`
| `reviewCount`  | `Number` |    No    |  null   | Sets the total number of reviews to display. Example: `View 499 reviews` where `499` is the total.                     | -

### Events

The events that can be subscribed to are as follows (if any):

| Event | Description |
| ----- | ----------- |

## Development

Start by cloning the repository and installing the required dependencies:

```sh
$ git clone git@github.com:justeat/fozzie-components.git
$ cd fozzie-components
$ yarn
```

Change directory to the `f-rating` package:

```sh
$ cd packages/components/molecules/f-rating
```

## Testing

To test all components, run from root directory.
To test only `f-rating`, run from the `./fozzie-components/packages/components/molecules/f-rating` directory.

### Unit and Integration tests

```sh
yarn test
```

### Component and Accessibility Tests

```bash
# Note: Ensure Storybook is running when running the following commands
cd ./fozzie-components

yarn storybook:build
yarn storybook:serve-static
```

yarn test-component:chrome
```
### Accessibility tests
```bash
yarn test-a11y:chrome
```
## Documentation to be completed once module is in stable state.


