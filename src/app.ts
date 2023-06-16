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