function chaining(target: any, propertyKey: string, descriptor: PropertyDescriptor): any {
  const fn: Function = descriptor.value;

  // eslint-disable-next-line func-names,no-param-reassign
  descriptor.value = function (...args: any[]) {
    fn.apply(target, args);
    return target;
  };
}

export = chaining;
