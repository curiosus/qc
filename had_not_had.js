//phase(180) produced by had() not() had()
qc.reset(1);
qc.write(1);
setTimeout(() => {qc.had(); qc.not(); qc.had()},3000);
