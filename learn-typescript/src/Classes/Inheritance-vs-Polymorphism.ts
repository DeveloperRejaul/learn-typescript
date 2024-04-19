/**
 * Inheritance: Inheritance refers to a mechanism where a subclass inherits properties and methods from its parent class. This allows a subclass to reuse the code and behavior of its parent class while also adding or modifying its own behavior. In TypeScript, inheritance is achieved using the extends keyword.
 * Polymorphism: Polymorphism refers to the ability of an object to take on many forms. This allows objects of different classes to be treated as objects of a common class, as long as they share a common interface or inheritance hierarchy. In TypeScript, polymorphism is achieved through method overriding and method overloading.
 */

class Animal2 {
    makeSound(): void {
      console.log('Making animal sound');
    }
  }
  
  class Dog2 extends Animal2 {
    makeSound(): void {
      console.log('Bark');
    }
  }
  
  class Cat extends Animal2 {
    makeSound(): void {
      console.log('Meow');
    }
  }
  
  let animal: Animal2;
  
  animal = new Dog2();
  animal.makeSound(); // Output: Bark
  
  animal = new Cat();
  animal.makeSound(); // Output: Meow