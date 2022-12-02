const { input } = require('./input');

const sorted = input
	.map((elf) => {
		return elf.split('\n').map((collection) => parseInt(collection)).reduce((sum, v) => sum + v)
  })
  .sort((a, b) => b - a)

  console.log(sorted.slice(0, 3).reduce((sum, n) => sum += n))