### Behind the Scenes

#### Constructor Function (`User`):

`User` is a constructor function defined using function declaration syntax. When called with `new`, it behaves differently from regular function calls.

#### Object Creation (`new User("yaoob", 55)`):

When `new User("yaoob", 55)` is executed:
- A new empty object `{}` is created.
- The constructor function `User` is called with `this` pointing to the newly created object.
- Inside `User`, `this.name = name` and `this.score = score` set the properties of the new object.
- The new object is automatically returned unless the constructor explicitly returns another object.

#### Prototype Linking:

JavaScript automatically links the prototype of the new object (`user1`) to `User.prototype`. This linkage allows all instances created with `new User` to inherit methods defined on `User.prototype`.

#### Usage of `new`:

Using `new` ensures that the `User` function acts as a constructor, setting up the new object correctly with its properties and linking it to its prototype chain.

### Conclusion

The `new` keyword in JavaScript simplifies the process of creating objects that share the same structure and methods, enabling efficient code reuse through prototypes. It encapsulates the steps of object instantiation and prototype linkage, making the code cleaner and easier to manage.
