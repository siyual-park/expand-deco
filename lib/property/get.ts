import changeProperty = require('./change-property');

function get(callback: () => any) {
  // eslint-disable-next-line func-names
  return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
    changeProperty(target, propertyKey, { get: callback }, descriptor);
  };
}

export = get;
