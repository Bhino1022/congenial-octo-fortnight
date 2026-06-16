import { greet, add } from './utils/math';
import { formatOutput } from './utils/format';

const main = (): void => {
  console.log(greet('World'));
  console.log(formatOutput(add(5, 3)));
};

main();
