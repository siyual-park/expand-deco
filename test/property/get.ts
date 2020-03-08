import get = require('../../lib/object-property/get');

class Greeter {
  @get(() => 'World!')
  greeting: string;

  greet() {
    return `Hello, ${this.greeting}`;
  }
}

const greeter = new Greeter();
// eslint-disable-next-line no-console
console.log(greeter.greet());
