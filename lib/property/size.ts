import changeProperty = require('../object-property/change-property');

function size(range: { min: number, max: number } = { min: undefined, max: undefined }) {
  let value: number;
  return (target: any, propertyKey: string | symbol) => {
    // Store the definition result
    changeProperty(target, propertyKey,
      {
        configurable: true,
        enumerable: true,
        get: () => value,
        set: (newValue: number) => {
          if (range.max !== undefined && newValue > range.max) value = range.max;
          else if (range.min !== undefined && newValue < range.min) value = range.min;
          else value = newValue;
        },
      });
  };
}

export = size;
