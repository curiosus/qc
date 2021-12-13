//apply hadamard twice to a qbit in initial state of |1>


//initialize 1 qbit
qc.reset(1);

//assign inital state as |1>
qc.write(1);

//wait 3 seconds, apply hadamard, wait 3 more seconds and apply hadamard to the qbit in superposition
setTimeout(() => {qc.had(); setTimeout(() => {qc.had();}, 3000); }, 3000);
