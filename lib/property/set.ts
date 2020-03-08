import changeProperty = require('./change-property');

function set(callback: (value: any) => void) {
  // eslint-disable-next-line func-names
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // eslint-disable-next-line no-param-reassign
    changeProperty(target, propertyKey, { set: callback }, descriptor);
  };
}

export = set;
