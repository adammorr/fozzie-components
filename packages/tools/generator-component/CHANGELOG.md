# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

v2.14.1
------------------------------
*July 27, 2022*

### Fixed
- Generated WebdriverIO tests to use ES6 syntax.
- Generated WebdriverIO tests to use async/await.
- Jest config from attempting to execute visual tests.


v2.14.0
------------------------------
*July 25, 2022*

### Added
- Node 16 support.


v2.13.0
------------------------------
*July 19, 2022*

### Fixed
- `fozzie` reference to variable.


v2.12.1
------------------------------
*July 07, 2022*

### Fixed
- Missing closing brace in package.json generator template.


v2.12.0
------------------------------
*July 06, 2022*

### Added
- `@use` changes for new generated components.


v2.11.1
------------------------------
*June 15, 2022*

### Removed
- Removed vite as a dependency and moved to monorepo root `package.json` to solve version conflict issue

v2.11.0
------------------------------
*June 10, 2022*

### Changed
- Bumped f-wdio-utils version & fixed up breaking changes.
- Changed tests to default 'yes'.
- Increased bundle default to 20kb.
- Omitted f-service if no translations required.
- Bumped f-services version.
- Refactored the storybook story to use controls.
- Fixed up lint errors.
- Merged visual test for mobile and desktop devices.


v2.10.0
------------------------------
*June 7, 2022*

### Changed
- Refactor WebDriverIO tests to use async in order to support Node 16 using `codemod` utility.


v2.9.0
------------------------------
*March 29, 2022*

### Changed
- Stylelint called directly now rather than through vue-cli in NPM scripts.

### Removed
- Dependency on `@samhammer/vue-cli-plugin-stylelint` as now call stylelint directly rather than through vue-cli.


v2.8.0
------------------------------
*February 4, 2022*

### Removed
- Removed devDependency on node-sass-magic-importer as no longer needed.
- Tilda `~` for fozzie scss call as no longer needed.


v2.7.0
------------------------------
*February 4, 2022*

### Changed
- Updated to ESlint v8


v2.6.0
------------------------------
*December 22, 2021*

### Removed
- $theme variable as it is not needed anymore.


v2.5.0
------------------------------
*December 7, 2021*

### Added
- Prompt option for visual regression
- Spec templates for visual regression (mobile and desktop)

### Changed
- component names in `test-utils` and `test`

### Removed
- Unused functions from within the component object - `open()` and `load()`


v2.4.0
------------------------------
*November 10, 2021*

### Added
- Prompt options for `template` and `page` components.

### Changed
- Updated minor package dependency versions.
- `axios` moved to be a devDependency (as should be a peerDependency if required by a component).


v2.3.4
------------------------------
*November 5, 2021*

### Changed
- Update `f-wdio-utils` package version.


v2.3.3
------------------------------
*November 3, 2021*

### Fixed
- Some whitespace issues in template files


v2.3.2
------------------------------
*November 2, 2021*

### Changed
- Fixed multiple logic and linting issues with the Yeoman generator templates


v2.3.1
------------------------------
*October 29, 2021*

### Fixed
- package_json closing bracket for component test scripts


v2.3.0
------------------------------
*October 20, 2021*

### Changed
- Template package.json so it outputs the correct settings for services.
- index.js (within src directory) which gives us the `isService` setting available within the config.

### Added
- Vite to the template folder for use with services.

### Removed
- f-services from service specific generation.


v2.2.3
------------------------------
*October 18, 2021*

### Added
- A reminder to add new component to circleci config.


v2.2.2
------------------------------
*May 25, 2021*

### Changed
- CSS variable to use pie design tokens instead of fozzie-colour-palette var.


v2.2.1
------------------------------
*May 18, 2021*

### Fixed
- Issue with `open` function in component object.

### Removed
- Incorrect documentation

### Removed
- DA and NO tenants.


v2.2.0
------------------------------
*March 14, 2021*

### Fixed
- Missing brackets on component spec.

### Removed
- DA and NO tenants.


v2.1.0
------------------------------
*February 25, 2021*

### Changed
- Updated templates in `test-utils` and `test` folder


v2.0.2
------------------------------
*February 10, 2021*

### Fixed
- Couple more `README` path and name updates.


v2.0.1
------------------------------
*February 10, 2021*

### Fixed
- Couple of path updates in the `README` and closing tag for `h1` removed.


v2.0.0
------------------------------
*January 27, 2021*

### Added
- `.yo-rc.json` to signify the destination root of the generator (to use the base of the mono-repo as our root directory, wherever the generator is run).
- Generator will now generate to a destination based on the users answers. For example, if it's specified that the component is an atom, the component will be generated into the `components/atoms` directory.
- Welcome prompt and update prompt which displays if the generator being run is out-of-date with the current published version.
- Option to exclude translations/`i18n` config when component doesn't need these.
- Excludes a number of directories and code when generated component is a service.

### Fixed
- `yeoman-generator` added to dependencies so that local testing doesn't error on missing dependency.

### Changed
- Structure of generator tidied up. Now uses `initializing` and `configuring` contexts rather than having all logic in the `writing` context.
- Prompts moved out into separate file.
- `_tests` folder updated (previously `tests`).
- `scripts` in `package.json` updated inline with recent changes to webdriver config.
- Unnecessary `scripts` removed based on yeoman options chosen.
- Sass loader config updated.


v1.10.1
------------------------------
*January 12, 2021*

### Changed
- Update axios version for security advisory.


v1.10.0
------------------------------
*December 31, 2020*

### Changed
- Jest config path updated for component skeleton.

v1.9.0
------------------------------
*December 30, 2020*

### Changed
- Updated config for latest `sass-loader`.
- Switches import in `common.scss` in line with fozzie v5-beta.


v1.8.0
------------------------------
*November 26, 2020*

### Added
- Stub CSS files in jest.


v1.7.0
------------------------------
*November 23, 2020*

### Changed
- CircleCI badge updated.


v1.6.0
------------------------------
*October 28, 2020*

### Removed
- Template files.


v1.5.0
------------------------------
*October 23, 2020*

### Added
- Stylelint config added as part of the generator.


v1.4.0
------------------------------
*October 16, 2020*

### Added
- Axe Accessibility Spec template

### Changed
- Moved conditional statement from axe-accessibility spec to axe-helper


v1.3.0
------------------------------
*October 14, 2020*

### Added
- Use today's date when creating initial changelog entry.


v1.2.0
------------------------------
*October 14, 2020*

### Changed
- Changed path so that the generator outputs to the current directory it's in, rather than the directory above the current location.
- Updated `babel.config.js` to run the tests through latest Node version rather than our browser config.
- Deleted theme mixin, as no longer needed.
- Removed font files from `Demo.vue`.
- Storybook syntax updated to new `export` syntax (from legacy `storiesOf` syntax).

v1.1.1
------------------------------
*October 6, 2020*

### Added
- API service template
- Axios to package.json template

### Fixed
- Test template


v1.1.0
------------------------------
*October 6, 2020*

### Changed
- Added test templates


v1.0.0
------------------------------
*August 27, 2020*

### Changed
- Updating `font-size` variable.


v0.2.1
------------------------------
*September 8, 2020*

### Changed
- Updated `devDependencies` to use same versions as the other packages.
- Vue CLI minor package updates.

### Fixed
- Updated bundle name in readme template.


v0.2.0
------------------------------
*May 12, 2020*

### Changed
- Updated template to use `vue-test-utils` to v1 and `@vue/cli-plugin-unit-test` to v4.3.1.

### Removed
- `testMatch` from jest config, as not needed.


v0.1.0
------------------------------
*April 21, 2020*

### Added
- First version to be able to create new components.
