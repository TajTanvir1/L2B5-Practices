### In TypeScript, **data types** are used to specify the type of data a variable can hold. TypeScript offers a variety of **primitive** and **complex types** to enhance type safety and reduce errors during development.

### **Primitive Data Types**

1. **`string`**
   Represents a sequence of characters (text).

   ```typescript
   let name: string = "John Doe";
   ```

2. **`number`**
   Represents both integer and floating-point numbers.

   ```typescript
   let age: number = 30;
   let pi: number = 3.14;
   ```

3. **`boolean`**
   Represents a true or false value.

   ```typescript
   let isActive: boolean = true;
   let isCompleted: boolean = false;
   ```

4. **`null`**
   Represents the absence of a value or object. `null` is a special value in TypeScript.

   ```typescript
   let user: string | null = null;
   ```

5. **`undefined`**
   Represents a variable that has not been assigned a value.

   ```typescript
   let uninitialized: undefined;
   ```

6. **`symbol`**
   A primitive data type that is used to create unique identifiers.

   ```typescript
   let sym: symbol = Symbol('unique');
   ```

7. **`bigint`**
   Represents large integers that are too large for the `number` type.

   ```typescript
   let largeNumber: bigint = 9007199254740991n;
   ```

---

### **Special Types**

1. **`any`**
   Represents any type of value. It effectively disables type checking for that variable.

   ```typescript
   let anything: any = 42;
   anything = "Hello";
   anything = true;
   ```

2. **`unknown`**
   Similar to `any`, but safer because you must first narrow the type before performing most operations.

   ```typescript
   let value: unknown = "Hello";

   if (typeof value === "string") {
       console.log(value.toUpperCase()); // Safe to use string methods
   }
   ```

3. **`void`**
   Represents the absence of any type, typically used for functions that don't return a value.

   ```typescript
   function logMessage(message: string): void {
     console.log(message);
   }
   ```

4. **`never`**
   Represents values that will never occur (e.g., a function that always throws an error or infinite loops).

   ```typescript
   function throwError(message: string): never {
     throw new Error(message);
   }
   ```

---

### **Complex Types**

1. **`Array`**
   Represents a list of items of the same type.

   ```typescript
   let numbers: number[] = [1, 2, 3, 4];
   let strings: Array<string> = ["apple", "banana", "cherry"];
   ```

2. **`Tuple`**
   Represents an array with a fixed number of elements, where each element can have a different type.

   ```typescript
   let user: [string, number] = ["Alice", 25];
   ```

3. **`Object`**
   Represents any non-primitive type (i.e., anything that isn't `string`, `number`, `boolean`, etc.).

   ```typescript
   let person: object = { name: "John", age: 30 };
   ```

4. **`Enum`**
   A special "class" that represents a group of constants (either numeric or string values).

   ```typescript
   enum Color {
     Red = "RED",
     Green = "GREEN",
     Blue = "BLUE"
   }
   let color: Color = Color.Red;
   ```

---

### **Type Aliases & Interfaces**

1. **`type` Aliases**
   Type aliases allow you to define custom types, and can represent more complex structures like unions, intersections, and more.

   ```typescript
   type ID = string | number;

   let userId: ID = 123;
   userId = "abc123";
   ```

2. **`interface`**
   An `interface` is a way to define the shape of an object, and it is often used for object-oriented programming or structuring data.

   ```typescript
   interface Person {
     name: string;
     age: number;
   }

   let person: Person = { name: "John", age: 30 };
   ```

---

### **Union and Intersection Types**

1. **Union Types (`|`)**
   Allows a variable to hold more than one type of value.

   ```typescript
   let value: string | number;
   value = "Hello";  // valid
   value = 42;       // valid
   ```

2. **Intersection Types (`&`)**
   Combines multiple types into one. A variable must conform to all the specified types.

   ```typescript
   interface Car {
     wheels: number;
   }

   interface Electric {
     batteryLife: number;
   }

   type ElectricCar = Car & Electric;
   let tesla: ElectricCar = { wheels: 4, batteryLife: 300 };
   ```

---

### **Literal Types**

1. **String Literals**
   You can restrict a variable to accept only specific string values.

   ```typescript
   let direction: "up" | "down" = "up";  // Only "up" or "down" are valid
   ```

2. **Numeric Literals**
   Similarly, you can restrict a variable to specific numeric values.

   ```typescript
   let status: 200 | 404 = 200;
   ```

---

### **Type Assertions**

Sometimes, TypeScript can’t infer the type, and you may need to tell it explicitly what type the value is. You can use **type assertions** to do this.

```typescript
let someValue: unknown = "Hello";
let strLength: number = (someValue as string).length;
```

---

### **Type Inference**

TypeScript can **infer** types automatically based on the assigned value, so you don't always need to annotate the type.

```typescript
let num = 42;  // TypeScript infers `num` as `number`
```

---

### **Example of Using Different Types in a Function**

```typescript
function greet(person: string, age: number): string {
  return `${person} is ${age} years old.`;
}

let message = greet("Alice", 30);
console.log(message);  // Output: Alice is 30 years old.
```

---

### Summary of Types in TypeScript:

* **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
* **Special Types**: `any`, `unknown`, `void`, `never`
* **Complex Types**: `Array`, `Tuple`, `Object`, `Enum`
* **Advanced Types**: `type` alias, `interface`, `Union`, `Intersection`, `Literal Types`

By using these types effectively, TypeScript helps ensure **type safety**, better **code quality**, and enhanced **developer experience**.
