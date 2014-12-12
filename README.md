# Rhizome

**Freshops theme “shell” and other global styling.**

This repo exists purely for the sake of testing base theme assets.

## About

Due to our WordPress setup, one should only copy the `rhizome` folder from [here](https://github.com/freshops/rhizome/tree/master/assets/scss) (this repo: `assets/scss`), and copy it to [here](https://github.com/freshops/freshops/tree/master/library/scss) (Freshops WordPress theme: `library/scss`).

As a copy/paste conveinence use this bash command:

```bash
# In the Freshops WordPress theme, cd to library/scss and run:
$ curl -#L https://github.com/freshops/rhizome/tarball/gh-pages | tar -xzv --strip-components 3 --include=*./assets/scss
```

… that will replace all Rhizome-specific scss files/folders.

**Note:** The other plugins used in this repo (check [`bower.json`](bower.json)) are handled by WordPress, so don’t worry about copying them (other than make sure they match between code bases).

**Important:** Update these files first **and then** copy them to `freshops` WordPress theme; **if you do edit `rhizome` in WordPress** then make sure you update the same files in this theme to reflect those changes.

## Development commands

Run and develop Sass:

```bash
$ cd rhizome/
# Install or update gems:
$ bundle install
# … or:
$ bundle update
# Have Sass watch while you develop:
$ bundle exec sass --watch assets/scss:assets/css --sourcemap=none --trace
```

Get latest plugins:

```bash
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
