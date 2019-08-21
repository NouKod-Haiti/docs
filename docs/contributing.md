---
id: contributing
title: How To Contribute
sidebar_label: How To Contribute
---

# Contributing to Noukod

Thank you for your interest in contributing to the Noukod website! From commenting on and triaging issues, to reviewing and sending Pull Requests, all contributions are welcome. We aim to build a vibrant and inclusive [ecosystem of partners, core contributors, and community](https://github.com/facebook/react-native/blob/master/ECOSYSTEM.md) that goes beyond the main React Native GitHub repository.

The [Open Source Guides](https://opensource.guide/) website has a collection of resources for individuals, communities, and companies who want to learn how to run and contribute to an open source project. Contributors and people new to open source alike will find the following guides especially useful:

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Building Welcoming Communities](https://opensource.guide/building-community/)

### [Code of Conduct](https://code.fb.com/codeofconduct/)

As a reminder, all contributors are expected to adhere to the [Code of Conduct](https://code.facebook.com/codeofconduct). Please go over it inorder to understand what actions will and will not be tolerated.
 will not be tolerated.

### Open Development {#open-development}

All work on React happens directly on [GitHub](https://github.com/NouKod-Haiti/noukod-haiti.github.io). Contributors send pull requests which go through the same review process.

### Branch Organization {#branch-organization}

We will do our best to keep the [`docs` branch](https://github.com/NouKod-Haiti/noukod-haiti.github.io/tree/docs) in good shape

If you send a pull request, please do it against the `docs` branch. We maintain stable branches for major versions separately but we don't accept pull requests to them directly. Instead, we cherry-pick non-breaking changes from docs to the latest stable major version.

### Semantic Versioning {#semantic-versioning}

This project follows [semantic versioning](https://semver.org/). We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes. When we make breaking changes, we also introduce deprecation warnings in a minor version so that our users learn about the upcoming changes and migrate their code in advance.

We tag every pull request with a label marking whether the change should go in the next [patch](https://github.com/facebook/react/pulls?q=is:open+is:pr+label:semver-patch), [minor](https://github.com/facebook/react/pulls?q=is:open+is:pr+label:semver-minor), or a [major](https://github.com/facebook/react/pulls?q=is:open+is:pr+label:semver-major) version. We release new patch versions every few weeks, minor versions every few months, and major versions one or two times a year.

Every significant change is documented in the [changelog file](https://github.com/NouKod-Haiti/noukod-haiti.github.io/blob/master/CHANGELOG.md).

### Bugs {#bugs}

#### Where to Find Known Issues {#where-to-find-known-issues}

We are using [GitHub Issues](https://github.com/NouKod-Haiti/noukod-haiti.github.io/issues) for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn't already exist.

### Proposing a Change {#proposing-a-change}

If you intend to change the site, or make any non-trivial changes to the docs, we recommend [filing an issue](https://github.com/NouKod-Haiti/noukod-haiti.github.io/issues/new). This lets us reach an agreement on your proposal before you put significant effort into it.

If you're only fixing a bug, it's fine to submit a pull request right away but we still recommend to file an issue detailing what you're fixing. This is helpful in case we don't accept that specific fix but want to keep track of the issue.

### Your First Pull Request {#your-first-pull-request}

Working on your first Pull Request? You can learn how from this free video series:

**[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)**

To help you get your feet wet and get you familiar with our contribution process, we have a list of **[good first issues](https://github.com/NouKod-Haiti/noukod-haiti.github.io/issues?q=is:open+is:issue+label:"good+first+issue")** that contain bugs that have a relatively limited scope. This is a great place to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up for more than two weeks, it's fine to take it over but you should still leave a comment.

### Sending a Pull Request {#sending-a-pull-request}

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation. We'll do our best to provide updates and feedback throughout the process.

**Before submitting a pull request,** please make sure the following is done:

1. Fork [the repository](https://github.com/NouKod-Haiti/noukod-haiti.github.io) and create your branch from `docs`.
2. Run `yarn` in the repository root.
3. If you've fixed a bug or added code that should be tested, add tests!
4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.
5. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).
6. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.


### Contribution Prerequisites {#contribution-prerequisites}

* You have [Node](https://nodejs.org) installed at v8.0.0+ and [Yarn](https://yarnpkg.com/en/) at v1.2.0+.
* You are familiar with Git.

### Development Workflow {#development-workflow}

After cloning React, run `yarn` to fetch its dependencies.
Then, you can run several commands:

* `yarn lint` checks the code style.
* `yarn test` runs the complete test suite.
* `yarn build` creates a `build` folder with all the packages.

First, run `yarn build`. This will produce bundles and package the site in the `build` folder.

The easiest way to try your changes is to run `yarn start`.

```sh
insert commands here
```

Every time you run `yarn build` in the React folder, the updated versions will appear in your project's `node_modules`. You can then rebuild your project to try your changes.

We still require that your pull request contains unit tests for any new functionality. This way we can ensure that we don't break your code in the future.

### Style Guide {#style-guide}

We use an automatic code formatter called [Prettier](https://prettier.io/).
Run `yarn prettier` after making any changes to the code.

Then, our linter will catch most issues that may exist in your code.
You can check the status of your code styling by simply running `yarn linc`.

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at [Airbnb's Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction.

### Request for Comments (RFC) {#request-for-comments-rfc}

Many changes, including bug fixes and documentation improvements can be implemented and reviewed via the normal GitHub pull request workflow.

Some changes though are "substantial", and we ask that these be put through a bit of a design process and produce a consensus among the core team.

The "RFC" (request for comments) process is intended to provide a consistent and controlled path for new features to enter the project. You can contribute by visiting the [rfcs repository](https://github.com/reactjs/rfcs).

### License {#license}

By contributing to this doc, you agree that your contributions will be licensed under its MIT license.

### What Next? {#what-next}

Go ahead an pull the code down and start browsing around.
