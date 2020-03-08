import changeProperty = require('./change-property');

function enumerable(value: boolean) {
  // eslint-disable-next-line func-names
  return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
    changeProperty(target, propertyKey, { enumerable: value }, descriptor);
  };
}

export = enumerable;
