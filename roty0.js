//init a single qbit
qc.reset(1);

//set value to |0>
qc.write(0);

//rotate 45 degrees
setTimeout(() => {qc.roty(45)}, 3000);
