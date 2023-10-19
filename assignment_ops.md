## Assignment Operators:

"="   **Assignment Operator**
* **Description**: Assigns a value to a variable.</br>
Example:</br>
`x = 5;`

"+="   **Add and Assign**
* **Description**: Adds the right operand to the left operand and then assigns the result to the left operand.</br>
Example:</br>
`x += 3; // Equivalent to x = x + 3;`

"-="  **Subtract and Assign**
* **Description**: Subtracts the right operand from the left operand and then assigns the result to the left operand.</br>
Example:</br>
`x -= 3; // Equivalent to x = x - 3;`

"*="  **Multiply and Assign**
* **Description**: Multiplies the left operand by the right operand and then assigns the result to the left operand.</br>
Example:</br>
`x *= 3; // Equivalent to x = x * 3;`

"/="  **Divide and Assign**
* **Description**:  Divides the left operand by the right operand and then assigns the result to the left operand.</br>
Example:</br>
`x /= 3; // Equivalent to x = x / 3;`

"%=" **Modulus and Assign**
* **Description**:  Calculates the modulus (remainder) of the division of the left operand by the right operand and then assigns the result to the left operand.</br>
Example:</br>
`x %= 3; // Equivalent to x = x % 3;`

"&=" **Bitwise AND and Assign**
* **Description**:  Performs a bitwise AND operation between the two operands and then assigns the result to the left operand.</br>
Example:</br>
`x &= 3; // Equivalent to x = x & 3;`

"|=" **Bitwise OR and Assign**
* **Description**:  Performs a bitwise OR operation between the two operands and then assigns the result to the left operand.</br>
Example:</br>
`x |= 3; // Equivalent to x = x | 3;`

"^=" **Bitwise XOR and Assign**
* **Description**:  Performs a bitwise XOR operation between the two operands and then assigns the result to the left operand.</br>
Example:</br>
`x ^= 3; // Equivalent to x = x ^ 3;`

"<<=" **Left Shift and Assign**
* **Description**:  Shifts the bits of the left operand to the left by the number of positions specified by the right operand and then assigns the result to the left operand.</br>
Example:</br>
`x <<= 2; // Equivalent to x = x << 2;`

">>=" **Right Shift and Assign**
* **Description**:  Shifts the bits of the left operand to the right by the number of positions specified by the right operand and then assigns the result to the left operand.</br>
Example:</br>
`x >>= 2; // Equivalent to x = x >> 2;`

`"**="`  **Exponentiation assignment (ES6)**
* **Description**:  Raises the left operand to the power of the right operand and then assigns the result to the left operand.</br>
Example:</br>
`x **= 3; // Equivalent to x = x ** 3;`

">>>=" **Zero fill right shift assignment**
* **Description**:  Performs a zero-fill right shift on the left operand by the number of positions specified by the right operand and then assigns the result to the left operand. This operation shifts zeros into the leftmost positions, irrespective of the sign of the number.</br>
Example:</br>
`x >>>= 3; // Equivalent to x = x >>> 3;`

"++" **Increment**
* **Description**:  Increases the value of a variable by 1.</br>
Example:</br>
`x++;   // Postfix form. Returns the current value of x first, then increments its value by 1.`</br>
`++x;   // Prefix form. Increments the value of x first, then returns the updated value.`

"--" **Decrement**
* **Description**:  Decreases the value of a variable by 1.</br>
Example:</br>
`x--;   // Postfix form. Returns the current value of x first, then decrements its value by 1.`</br>
`--x;   // Prefix form. Decrements the value of x first, then returns the updated value.`

The difference between the prefix and postfix forms can be important in the context of expressions. The prefix form modifies the variable's value before its current value is used in an expression, while the postfix form modifies the variable's value after its current value has been used in the expression.