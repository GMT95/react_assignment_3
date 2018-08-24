# Tasks

## Q1) Using states, render a text "Hello World", on clicking it, it should toggle to "Hello Pakistan", and vice versa! 
## Answer: 

 * **hosted [here](https://gmt95.github.io/react_assignment_3/)**
 * ***this repo***

## Q2) Write the difference between onClick={this.myFunc}, onClick={() => this.myFunc()} & onClick={this.myFunc.bind(this}} and when to use which one

## Answer:

**onClick** is like a variable in React and if we assign 
```javascript
onClick = {this.myFunction()}
``` 
it will throw an error and will not work

So,in React we always use variables like this without parmeters

```javascript
onClick = {this.myFunction}
``` 
But the problem is that the `this` in the above expression belongs to the JSX element the event is fired on and does not belong to the class. It will throw an error: `this is undefined` To resolve this either we have to bind the `this` to class's `this` using bind like this: 
```javascript
onClick = {this.myFunction.bind(this)}
``` 
## OR
use ES6 arrow functions because they dont have their own `this` and use parent's `this` in this case class's `this`

- - - 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).




