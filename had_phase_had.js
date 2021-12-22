//not gate produced from had() phase(180) had()

qc.reset(1);
qc.write(1);
setTimeout(() => {qc.had(); qc.phase(180); qc.had();}, 3000);
