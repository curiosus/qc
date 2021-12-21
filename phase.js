//initialize a single qbit
qc.reset(1);

//assign qbit value of 1 (phase has no effect on a |0> qbit
qc.write(1);

//wait 3 seconds and apply phase
setTimeout(() => {qc.phase(90)}, 3000);
