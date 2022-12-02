const { input } = require('./input');

const sorted = input.map((elf) => {
		return elf.split('\n').map((item) => parseInt(item)).reduce((sum, n) => sum + n);
	})
	.sort((a, b) => b - a);

console.log(sorted[0]);