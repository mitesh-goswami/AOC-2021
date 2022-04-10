let rawInput = `190
200
210
209
299`.split('\n').map(Number)

console.log(rawInput);
let increment = 0 ;
for(let i = 1; i< rawInput.length; i++){
    let prev = (rawInput[i-1]
        + rawInput[i-2] + rawInput[i-3])
    let current =( rawInput[i] + rawInput[i-1]
        +rawInput[i-2])

    if(prev < current){
        increment++;
    }
}
alert(increment)