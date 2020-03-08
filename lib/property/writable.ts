function writable(value: boolean) {
  // eslint-disable-next-line func-names
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // eslint-disable-next-line no-param-reassign
    descriptor.writable = value;
  };
}

export = writable;
