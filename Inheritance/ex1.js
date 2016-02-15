/**
 * Created by sebastiannielsen on 15/02/2016.
 */

// Animal - superclass
function Animal() {
    this.name = "unknown";
}

// Superclass method
Animal.prototype.setName = function(name){
    this.name = name;
    console.info('Name updated')
};

Animal.prototype.getName = function(){
    return this.name;
};

// Dog - subclass
function Dog(name) {
    Animal.call(this);
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype); // subclass extends superclass
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    return 'WUF'
};

var animal = new Animal();
var dog = new Dog('Fido');
console.log('Is dog an instance of Dog?', dog instanceof Dog); // true)
console.log('Is dog an instance of Animal?', dog instanceof Animal);// true
dog.getName();
console.log('Dog bark: ' +  dog.bark());
