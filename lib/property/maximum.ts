import changeProperty = require('../object-property/change-property');

function maximum(max: number = undefined) {
  let value: number;
  return (target: any, propertyKey: string | symbol) => {
    // Store the definition result
    const update = changeProperty(target, propertyKey,
      {
        configurable: true,
        enumerable: true,
        get: () => value,
        set: (newValue: number) => {
          if (max !== undefined && newValue > max) value = max;
          else value = newValue;
        },
      });

    if (!update) throw new Error('Unable to update property');
  };
}

export = maximum;
