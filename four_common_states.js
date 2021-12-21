//Create four common quantum states: |+> |-> |+Y> |-Y>
//initialize 1 qbit
qc.reset(1);
//assign qbit to |0>
qc.write(0);
//create the |+> state
setTimeout(() => {qc.had();
    //create the |-> state
    setTimeout(() => {qc.phase(180);
        //create the |+Y> state
        setTimeout(() => {qc.phase(-90);
            //create the |-Y> state
            setTimeout(() => {qc.phase(-180)}, 3000);
        }, 3000);
    }, 3000);
}, 3000);
