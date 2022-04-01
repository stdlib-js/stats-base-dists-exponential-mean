/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/**
* Returns the expected value of an exponential distribution.
*
* ## Notes
*
* -   If provided a negative value for `λ`, the function returns `NaN`.
*
* @param lambda - rate parameter
* @returns expected value
*
* @example
* var v = mean( 9.0 );
* // returns ~0.111
*
* @example
* var v = mean( 1.0 );
* // returns 1.0
*
* @example
* var v = mean( -0.2 );
* // returns NaN
*
* @example
* var v = mean( NaN );
* // returns NaN
*/
declare function mean( lambda: number ): number;


// EXPORTS //

export = mean;
