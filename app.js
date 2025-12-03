const { performance } = require('perf_hooks');

const start = performance.now();

const end = performance.now();

console.log(`Tempo de execução: ${(end - start).toFixed(4)} ms`);
