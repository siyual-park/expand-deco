import changeProperty = require('./change-property');

function value(v: any) {
  // eslint-disable-next-line func-names
  return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
    changeProperty(target, propertyKey, { value: v }, descriptor);
  };
}

export = value;
