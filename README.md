# Rhizome

**Freshops theme “shell” and other global styling.**

This repo exists purely for the sake of testing base theme assets.

## About

Due to our WordPress setup, one should only copy the `rhizome` folder from [here](https://github.com/freshops/rhizome/tree/master/assets/scss) (this repo: `assets/scss`), and copy it to [here](https://github.com/freshops/freshops/tree/master/library/scss) ([Freshops WordPress theme](https://github.com/freshops/freshops): `library/scss`).

As a copy/paste conveinence use this bash command:

```bash
# Navigate to here:
$ cd freshops/content/themes/freshops/library/scss
# ... and run:
$ curl -#L https://github.com/freshops/rhizome/tarball/gh-pages | tar -xzv --strip-components 3 --include=*./assets/scss
```

… that will replace all Rhizome-specific scss files/folders.

**Note:** The other plugins used in this repo (check [`bower.json`](bower.json)) are handled by WordPress, so don’t worry about copying them (other than make sure they match between code bases).

**Important:** Update these files first **and then** copy them to `freshops` WordPress theme; **if you do edit `rhizome` in WordPress** then make sure you update the same files in this theme to reflect those changes.

## Development commands

Assuming you have [Homebrew](http://brew.sh/), [npm](http://npmjs.org/), [rvm/Ruby](https://rvm.io/) and [Bundler](http://bundler.io/) installed …

… run and develop Sass:

```bash
$ cd rhizome/
# Install or update gems:
$ bundle install
# … or:
$ bundle update
# Have Sass watch while you develop:
$ bundle exec sass --watch assets/scss:assets/css --sourcemap=none --trace
```

… get latest plugins:

```bash
# Bower setup:
$ npm install
# Install or update Bower dependencies:
$ npm run bower-installer
```

… occasionally execute:

```bash
# Update rvm:
$ rvm get stable
# Update rvm Ruby:
$ rvm install current && rvm use current
# Update RubyGems:
$ gem update --system
# Update rvm gems:
$ gem update
# Brew:
$ brew update
$ brew doctor
```

Other useful commands:

```bash
$ which ruby
$ rvm list
$ rvm all do gem list
```

<p align="center">
	<a href="http://www.imdb.com/title/tt0096256/" target="_blank">
		<img width="100%" src="https://cloud.githubusercontent.com/assets/218624/5407778/852e1be2-8182-11e4-8222-c8d41fc204aa.gif" alt="That’s all folks!">
	</a>
</p>

That’s all folks!

---

Copyright © 2014 [Freshops](http://freshops.com/). **All rights reserved.**

Unauthorized use and/or duplication of this material, without express and written permission from the owner, is strictly prohibited.

<img src="https://github.global.ssl.fastly.net/images/icons/emoji/octocat.png">
