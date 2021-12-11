applyNot = () => {
    qc.not();
    const result = qc.read();
    qc.print(result);
    setTimeout(applyNot, 3000);
};

//initialize one qbit
qc.reset(1);

//assign it value of 0
qc.write(0);

//read the qbit and store result
const result = qc.read();

//print the result
qc.print(result);

//apply the not gate recursivley
setTimeout(applyNot, 3000);
