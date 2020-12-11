[Deployed Version](https://shiratap.github.io/calculatorApp/)

# Calculator App

Welcome to my Calculator/Equation app! I wanted to have my own version of a
calculator with equation saving capabilities. I remember my old struggles in
math of remembering equations in junior-high/high school and thought having an
app like this would be a good solution for it. This was the end product of that
concept.

## Installation

Easiest way to get started with the app is to run this set of commands in
gitbash after changing directory (`cd`) to your desired folder.

```
git clone https://github.com/shiratap/calculatorApp
npm i
npm start
```

## Technologies used

This is a React.js based application. The deployed version found
[here](https://shiratap.github.io/calculatorApp/) is an optimized static build
of the react app itself. It's being hosted over Github Pages. I utilized
localstorage as a method of storing equations instead of using an actual
database technology. There was no need for a server either as I wanted the app
to be entirely front end, making this my best attempt at a lightweight
application in the best interest of the user.

## Calculations

Calculations heavily utilize the JavaScript `eval()` function, which has been
flagged as a flawed and breakable. `eval()` is used on the input state to
calculate the output state. Both of these are stored as strings. My error
handling covers a large percentage of conventional user breaking input, but not
all of them.

## Things that don't work

- `^` button. I haven't figure out a good way to parse the closest left and
  right numbers to get `Math.pow(a,b)` formatted.
- `!` button. It's less important functionality, but I would like it added
- `true`/`false` buttons. Knowing the `eval()` funciton works on conditional
  statements, I should have these implemented. Oddly enough, you can type those
  in and the calculator can still evaluate it, but you can't save it.
- Showing the same variable in multiple places. Ex: `3x^2 + 3x + 4`. The input
  value for `x` doesn't update for both inputs, nor have I given a worthy try to
  do so. I'd like it to be a thing.
