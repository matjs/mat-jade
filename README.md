# mat-jade

[![npm version](https://badge.fury.io/js/mat-jade.svg)](http://badge.fury.io/js/mat-jade)

## Installation

```sh
npm install --save-dev mat-jade
```

## Usage

```javascript
var mat  = require('mat')
var jade = require('mat-jade')

mat.task('jade', function () {
  mat.url([/\.html/])
    .rewrite([
      [/\.html/g, '.jade']
    ])
    .use(jade({
      cdn: 'xxx'
    }))
})
```