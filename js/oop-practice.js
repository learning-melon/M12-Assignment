// STEP 1
/*class Cat{
    constructor(){
    }
}

const Dog = class{
    constructor(){
    }   
}*/

// STEP 2
/*let fluffy = new Cat()
let fido = new Dog()*/

// STEP 3
/*class Animal{
    constructor(){
    }
    confirmCreation(){
        console.log("The Animal has been created")
    }
}*/

// STEP 4
/*class Animal{
    constructor(message){
        console.log(message)
    }
}*/

// STEP 5
/*class Animal{
    constructor(type, breed, color, height, length){
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length
    }
}*/

// STEP 6 (using class from Step 5)
/*let dog = new Animal("dog", "poodle", "white", "2ft", "3ft")
for (let property in dog){
    console.log(dog[property])
}*/

// STEP 7
/*class Animal{
    constructor(type, breed, color, height, length){
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length
    }

    speak(){
        if(this.type === "dog"){
            console.log(`The ${this.color} dog is barking!`)
        }
        else if(this.type === "cat"){
            console.log(`The ${this.color} cat is meowing!`)
        }
    }
}
let lassie = new Animal('dog','collie','brown','2.5ft','3ft')
lassie.speak()
*/

// STEP 8
/*class Animal{
    #type
    #breed
    #color
    #height
    #length

    constructor(type, breed, color, height, length){
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length

        this.speak = function(){
            return this.#checkType()
        }
    }
    #checkType(){
        if(this.type == "dog") return "dog"
        else return "cat"
    }
}

let lassie = new Animal('dog','collie','brown','2.5ft','3ft')
console.log(`The ${lassie.speak()} has made a noise!`)*/

// STEP 9
/*String.prototype.findWords = function(word){
    let regex = new RegExp(`\\s${word}\\s`, 'gi')
    let words = this.match(regex)
    let wordCount = words ? words.length : 0
    alert( wordCount == null ? 0 : wordCount )
}*/