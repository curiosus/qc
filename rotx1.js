//init a single qbit
qc.reset(1);

//set value to |1>
qc.write(1);

//rotate 45 degrees
setTimeout(() => {qc.rotx(45)}, 3000);
