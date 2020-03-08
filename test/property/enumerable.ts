import enumerable = require('../../lib/object-property/enumerable');

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return `Hello, ${this.greeting}`;
  }
}

const greeter = new Greeter('World!');
// eslint-disable-next-line no-restricted-syntax,guard-for-in
for (const element in greeter) {
  // eslint-disable-next-line no-console
  console.log(element);
}
