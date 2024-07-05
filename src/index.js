let numbers = [1,2,3,4,5,6,7,8,9,0]
let symbols = ["!","#","$","%","&","/","_","-","@","+"]
let letters = ["a","b","c","d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let lettersMayus = []
letters.forEach((letter)=>{ // Arrow Function
    lettersMayus.push(letter.toUpperCase())
})
let everyThing = [...numbers,...symbols,...letters,...lettersMayus]



const password = function(){
    let pass="";
    for (let index = 0; index <= 20;index++) {
        pass = pass + `${everyThing[Math.floor(Math.random() * everyThing.length)]}`
    };
    let message = `Your password is: ${pass}`
    console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
    password
};

