# Type Error in TypeScript Function Parameter

This repository demonstrates a common type error in TypeScript when passing an array to a function expecting a string.  The `greeter` function expects a single string, but an array is passed resulting in a type error.

The solution shows how to correctly handle this scenario, either by modifying the function signature to accept an array or iterating over the array to call the function multiple times.