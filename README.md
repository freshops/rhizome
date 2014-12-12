# Rhizome

**The Freshops theme.**

This repo exists purely for the sake of testing base theme assets.

## About

Due to our WordPress setup, one should only copy the `rhizome` folder from [here](https://github.com/freshops/rhizome/tree/master/assets/styles/scss), and copy it to [here](https://github.com/freshops/freshops/tree/master/library/scss).

The bower plugins used in this repo are handled by WordPress, so no need to worry about copying them (other than make sure they match between projects).

In order to update these files, do it here first and then copy to `freshops` WordPress theme; if you do edit `rhizome` in WordPress, make sure you update this theme to reflect those changes.

**Note:** At some point in future, I’d like to make this more of an automated workflow.

## Development commands

Run and develop Sass:

```bash
$ cd rhizome/
# Install or update gems:
$ bundle install
# … or:
$ bundle update
# Have Sass watch while you develop:
$ sass --watch assets/styles/scss:assets/styles/css --sourcemap=none --trace

Get latest plugins:

```
# Bower setup:
$ npm install
# Install or update Bower dependencies:
$ npm run bower-installer
```

Occasionally:

```bash
# Update rvm:
$ rvm get stable
# Update rvm Ruby:
$ rvm install current && rvm use current
# Update rvm gems:
$ gem update
# Brew:
$ brew update
$ brew doctor
```

---

Copyright © 2014 [Freshops](http://freshops.com/). **All rights reserved.**

Unauthorized use and/or duplication of this material, without express and written permission from the owner, is strictly prohibited.

<img src="https://github.global.ssl.fastly.net/images/icons/emoji/octocat.png">
