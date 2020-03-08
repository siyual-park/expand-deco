import get = require('../../lib/property/get');

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @get(() => '')
  greet() {
    return `Hello, ${this.greeting}`;
  }
}

const greeter = new Greeter('World!');
// eslint-disable-next-line no-console
console.log(greeter);
