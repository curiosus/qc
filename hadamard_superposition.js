//initialize one qbit
qc.reset(1);

//assign qbit to |0>
qc.write(0);

//wait 3 seconds and then apply hadamard
setTimeout(() => {qc.had()}, 3000);
