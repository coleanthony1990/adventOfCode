const { input } = require('./input');

// const sumsSorted = input
// 	.map((elf) => {
// 		return elf
// 			.split('\n')
// 			.map((item) => parseInt(item, 10))
// 			.reduce((sum, v) => sum + v, 0);
// 	})
// 	.sort((a, z) => z - a);

// console.log(sumsSorted.slice(0, 3).reduce((sum, v) => sum + v, 0));

const sorted = input
	.map((elf) => {
		return elf.split('\n').map((collection) => parseInt(collection)).reduce((sum, v) => sum + v)
  })
  .sort((a, b) => b - a)

  console.log(sorted.slice(0, 3).reduce((sum, n) => sum += n))