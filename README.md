# Inconsistent NaN Behavior in JavaScript Arithmetic

This repository demonstrates an uncommon issue related to the handling of NaN (Not a Number) values in JavaScript arithmetic operations.  While the expected behavior is often well-defined (NaN in any arithmetic operation results in NaN), subtle differences exist across JavaScript engines.

The `bug.js` file showcases this inconsistency with the `myFunction`.  The function performs simple subtraction; however, the result when using `NaN` as an operand might differ depending on the browser or JavaScript runtime used.  This inconsistency can lead to unexpected behavior in applications, especially when dealing with potentially invalid numerical inputs.

The `bugSolution.js` file offers a more robust approach.  It explicitly checks for NaN before performing the calculation, handling the case appropriately to mitigate unexpected behavior and improve the reliability of the code.