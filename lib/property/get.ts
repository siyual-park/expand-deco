function get(callback: () => any) {
  // eslint-disable-next-line func-names
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // eslint-disable-next-line no-param-reassign
    descriptor.get = callback;
  };
}

export = get;
