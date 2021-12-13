//Create a superposition using hadamard on a |0> qbit and apply hadamard to superposition

//initialze 1 qbit
qc.reset(1);

//set to state |0>
qc.write(0);

//wait 3 seconds and apply hadamard, wait 3 more seconds and apply hadamard again
setTimeout(() => {qc.had();setTimeout(() => {qc.had()},3000);}, 3000);
