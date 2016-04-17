# console-log-div

> Clones console.log calls to a created div in the page. Great for demos and experiments.

[Demo](http://glebbahmutov.com/console-log-div/test/index.html),
[Better short JS demos blog post](http://glebbahmutov.com/blog/better-short-javascript-demos/)

[![NPM][console-log-div-icon] ][console-log-div-url]

[![Build status][console-log-div-ci-image] ][console-log-div-ci-url]
[![dependencies][console-log-div-dependencies-image] ][console-log-div-dependencies-url]
[![devdependencies][console-log-div-devdependencies-image] ][console-log-div-devdependencies-url]
[![semantic-release][semantic-image] ][semantic-url]

![console-log-div image][console-log-div image]

## Use

* Grab using npm or bower under name `console-log-div`.
* Include 'console-log-div.js' in your page. `console.log` calls will be shown in the div on the page.

```
<script src="bower_components/console-log-div/console-log-div.js"></script>
```

The created element will have class `.console-log-div` and id `console-log-div` thus you can style it.
The inner text will has id `console-log-text`.

```
<style>
.console-log-div {
  border: 1px solid gray;
  padding: 5px 10px;
  border-radius: 5px;
  width: 95% !important;
  background-color: #efefef;
}
</style>
```

## Customize existing fieldset

Instead of adding a new element at the end of the body, you can mirror console output to an existing `fieldset` 
element. Just give it id `console-log-div`.

    <fieldset id="console-log-div"></fieldset>
    <p>The fieldset above will mirror <code>console.log</code> calls</p>
    <script src="../console-log-div.js"></script>

I used `fieldset` tag to place an html5 label on the top border.

## jsFiddle demos

When showing demos on [jsfiddle][jsfiddle] or [plnkr][plnkr]
you can use RawGit proxy

```html
<script src="https://rawgit.com/bahmutov/console-log-div/master/console-log-div.js"></script>
```

[jsfiddle]: http://jsfiddle.net/
[plnkr]: http://plnkr.co/

## Handling exceptions

This library installs window error event listener, and prints the exception's message and location.
For example throwing an error like this `throw new Error('this is a thrown error');` will generate text output

    EXCEPTION: Uncaught Error: this is a thrown error
      file:///console-log-div/test/index.html 39:13

## Console methods

The following methods are mirrored into the div: `console.log, .warn, .error and .table`.

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/console-log-div/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[console-log-div-icon]: https://nodei.co/npm/console-log-div.png?downloads=true
[console-log-div-url]: https://npmjs.org/package/console-log-div
[console-log-div-ci-image]: https://travis-ci.org/bahmutov/console-log-div.png?branch=master
[console-log-div-ci-url]: https://travis-ci.org/bahmutov/console-log-div
[console-log-div-dependencies-image]: https://david-dm.org/bahmutov/console-log-div.png
[console-log-div-dependencies-url]: https://david-dm.org/bahmutov/console-log-div
[console-log-div-devdependencies-image]: https://david-dm.org/bahmutov/console-log-div/dev-status.png
[console-log-div-devdependencies-url]: https://david-dm.org/bahmutov/console-log-div#info=devDependencies
[console-log-div image]: images/console-log-div.png
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
