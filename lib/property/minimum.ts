import changeProperty = require('../object-property/change-property');

function minimum(min: number = 0) {
  let value: number;
  return (target: any, propertyKey: string | symbol) => {
    // Store the definition result
    changeProperty(target, propertyKey,
      {
        configurable: true,
        enumerable: true,
        get: () => value,
        set: (newValue: number) => {
          if (min !== undefined && newValue < min) value = min;
          else value = newValue;
        },
      });
  };
}

export = minimum;
