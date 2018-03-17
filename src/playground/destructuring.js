const person = {
    name : "Tolga",
    age : 27,
    location : {
        city : "New York",
        temp : 92
    }
}

// console.log(`${person.name} is ${person.age} years old.`)

//----OBJECT DESTRUCTURING

//1. name and age has to match to extract name amd city and create the variables
// const name = person.name;
// const age = person.age;

// const {name, age} = person ; 


// console.log(`${name} is ${age} years old.`)

//2. we can also acesss location object. city and temp have to be used but we can use default values and rename variables
// const {city, temp: temperature}=person.location // renames temp to temperature

// const {name :firstName='Anoymous', age} = person;  //renmae varialbe and set default


// console.log (`${firstName} is ${age} years old`)


//---ARRAY DESTRUCTURING


// const address = ['1299 S Juniper Street', 'Philedelphia', 'Pennsylvania', '19868'];

// console.log(`You are in ${address[1]} ${address[2]} ${address[3]}`)

// const [street, city, state, zip] = address; //extracts 4 of therm. if you dont want the last one just omit.
// const [, , state, zip] = address; //if you want to skip street, leave comman in there.
// console.log(`You are in ${street} ${address} ${state} ${zip}`)
// console.log(`You are in ${state} ${zip}`)


// const [, , state] = address; //if you want to skip street, leave comman in there.
// console.log(`You are in ${state}`)

// const address =[];  -->> you can set defaults to the ones that dont exist in the array
// const [, , state='New York'] =address;
// console.log(`You are in ${state}`)

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75']

const [coffee, small, medium, large]=item;

console.log(`A medium ${coffee} costs ${medium}`)