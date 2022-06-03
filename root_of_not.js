//init qbit
qc.reset(1);

//assign value
qc.write(1);

//apply root of not twice which is equivlent to not
setTimeout(() => {qc.had(); qc.phase(90); qc.had();
    setTimeout(() => {qc.had(); qc.phase(90); qc.had();}, 3000);
}, 3000);

