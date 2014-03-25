Ionic App Base
=====================

A starting project for Ionic that optionally supports
using custom SCSS, and makes it easy to update Ionic through
bower.

## Using this project

We recommend using the `ionic` utility to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ sudo npm install -g ionic
```

Then run:

```bash
$ sudo npm install -g ionic
$ ionic start myProject tabs
```

More info on this can be found on the Ionic [Getting Started](ionicframework.com/getting-started) page.

## Installation

While we recommend using the `ionic` utility to create new Ionic projects, you can use this repo as a barebones starting point to your next Ionic app.

To use this project as is, first clone the repo from GitHub, then run:

```bash
$ cd ionic-app-base
$ sudo npm install -g bower
$ npm install
$ gulp bootstrap --sass
```

This will download the most recent Ionic release from bower, and copy over the SCSS files into `./sass` for future editing.

## Modifying SCSS Files 

This project makes it easy to customize the style of Ionic using the SCSS files we use to customize the look of Ionic.

Just update the files in `./scss/`, and run `gulp` or `gulp watch` to rebuild the CSS files for Ionic.

## Updating the SCSS Files

In order to not clobber your work, the SCSS files will not be automatically updated in the future, even if you update the local ionic version from bower.

If you have made changes to your SCSS files and want to update to the new Ionic ones, we recommend doing a manual diff, or if you wish, overwriting your changes using:

```bash
$ gulp bootstrap --sass
```

Of course, you can also perform a manual bower update and copy the files over.
