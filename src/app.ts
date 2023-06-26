/* const names: Array<string> = ['Max', 'Manuel']; //this is a generic type, it's the same as string[]
//names[0].split(' ')

const promise: Promise<number> = new Promise((resolve, reject) => { //generic types help typescript understand which type we are expecting to recive and with that he can give us support when we use methods for example, so its always better use the correct generic type instead of "any" type
    setTimeout(()=>{
        resolve(10)
    }, 2000)
});

promise.then(data =>{
    // data.split(' ') //we can't do this because promise knows that it will return a number type value so we cant use split
}) */

function merge<T extends object, U extends object>(objA: T, objB: U){ //typescript understands that objA and objB can be any type of a object and they can also be the same type, but they are a specific type
    return Object.assign(objA, objB) //since this assign is a normal method from the vanilla Javascript, we don't really need this function, it exists just for demo purposes.
};

//console.log(merge({name: 'Max'}, {age: 30}))
const mergedObj = merge({name: 'Max'}, {age: 30});
console.log(mergedObj)

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{ //generic function that has a length category
    let descriptionText = 'Got no value.'
    if(element.length === 1){
        descriptionText = 'Got 1 element.'
    } else if (element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements'
    }
    return [element, descriptionText ]
}

console.log(countAndDescribe('Hi there!'))