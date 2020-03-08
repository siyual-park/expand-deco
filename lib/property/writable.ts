import changeProperty = require('./change-property');

function writable(value: boolean) {
  // eslint-disable-next-line func-names
  return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
    changeProperty(target, propertyKey, { writable: value }, descriptor);
  };
}

export = writable;
