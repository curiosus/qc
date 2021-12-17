//Quantum Random Number Generator by putting a qbit in 
//superposition using had() and then reading it
let v = -1;
qc.reset(1);
qc.write(0);
setTimeout(() => {
    qc.had();
    setTimeout(()=> {
        v = qc.read();
        qc.print(v);
        qc.print('\n');
    },3000);
},3000);
