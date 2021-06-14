<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Mean

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Exponential][exponential-distribution] distribution [expected value][expected-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][expected-value] for an [exponential][exponential-distribution] random variable is

<!-- <equation class="equation" label="eq:exponential_expectation" align="center" raw="\mathbb{E}\left[ X \right] = \frac{1}{\lambda}" alt="Expected value for an exponential distribution."> -->

<div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = \frac{1}{\lambda}" data-equation="eq:exponential_expectation">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/exponential/mean/docs/img/equation_exponential_expectation.svg" alt="Expected value for an exponential distribution.">
    <br>
</div>

<!-- </equation> -->

where `λ` is the rate parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-exponential-mean
```

</section>

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats-base-dists-exponential-mean' );
```

#### mean( lambda )

Returns the [expected value][expected-value] of an [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```javascript
var v = mean( 9.0 );
// returns ~0.111

v = mean( 0.5 );
// returns 2.0
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var v = mean( -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var mean = require( '@stdlib/stats-base-dists-exponential-mean' );

var lambda;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    lambda = randu() * 20.0;
    v = mean( lambda );
    console.log( 'λ: %d, E(X;λ): %d', lambda.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-exponential-mean.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-exponential-mean

[test-image]: https://github.com/stdlib-js/stats-base-dists-exponential-mean/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-exponential-mean/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-exponential-mean/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-exponential-mean?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-exponential-mean
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-exponential-mean/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-exponential-mean/main/LICENSE

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->