import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accPresident= await stdlib.newTestAccount(startingBalance);

console.log('Launching...');
const ctcPresident = accPresident.contract(backend);

//create an Array for the Senates
const arraySenates=[];

//creating a function to reuse when creating new Senate

const newSenate=async()=>{
  const newSelect = async(who)=>{
  const accSenates= await stdlib.newTestAccount(startingBalance);
  const ctcSenates = accSenates.contract(backend, ctcPresident.getInfo());
  arraySenates.push(accSenates.getAddress());
  }
  await newSelect("Bob");
  await newSelect("Bob");
  
  console.log(arraySenates);
  
};




//push the address of each user to my array

console.log('Starting backends...');
 await ctcPresident.p.President({
  
    ready: ()=>{
      console.log("the president is ready to accept attachment")
      newSenate()
    },
   
   
 
  
  });

console.log('Goodbye, Mr. President and the Senates');
