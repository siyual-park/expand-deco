import changeProperty = require('../object-property/change-property');

function maximum(max: number = undefined) {
  let value: number;
  return (target: any, propertyKey: string | symbol) => {
    // Store the definition result
    changeProperty(target, propertyKey,
      {
        configurable: true,
        enumerable: true,
        get: () => value,
        set: (newValue: number) => {
          if (max !== undefined && newValue > max) value = max;
          else value = newValue;
        },
      });
  };
}

export = maximum;
