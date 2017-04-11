# RHS Color Utilities

Convert between [R.H.S. Color Chart](http://www.rhsshop.co.uk/category.aspx?id=10000006) values, RGB screen approximations, and friendly color names.

Note that these are just approximations and accuracy depends on color calibration, gamma settings, and various other factors. Some colors with 0 or 255 for a color component may be impossible to display on a screen and have been clipped.

# Script Usage

First, `npm install rhs-color`. It will install a script on your path:

```sh
$ rhs-color 165A
165A => [75,40,29] #4b281d Moderate Brown

$ rhs-color '#4b281d'
4b281d => RHS 165A Moderate Brown (#4b281d)
```

# Library Usage

Example:

```js
import rhs from 'rhs-color';

console.log(rhs.hex('165A'));
console.log(rhs.rgb('165A'));
console.log(rhs.name('165A'));
console.log(rhs.ucl('165A'));

console.log(rhs.fromRgb('#4b281d'));
```

## License

https://dgt.mit-license.org/
