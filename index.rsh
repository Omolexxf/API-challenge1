//This defines the version of reach
'reach 0.1';

//This is the main
export const main = Reach.App(() => {
   
  //the president is the participant that deploys the contract
  const President= Participant('President', {
    // Specify the President's interact interface here
    ready: Fun([], Null)
  });

  //... while the senates are attach to the contract using API defined in Reach
  const Senates= API('Senates', {
    // Specify Senates' interact interface here
  });
  init();
  President.only(()=>{
   interact.ready()
   
  })
  President.publish();
  commit();
  


  exit();
});
