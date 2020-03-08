/* eslint-disable no-param-reassign */

// eslint-disable-next-line max-len
function changeProperty(target: any, propertyKey: string | symbol, newDescriptor: PropertyDescriptor, descriptor?: PropertyDescriptor): boolean {
  try {
    const useObjectPropertyFunction = !descriptor;
    // eslint-disable-next-line max-len
    if (useObjectPropertyFunction) descriptor = Reflect.getOwnPropertyDescriptor(target, propertyKey) || {};

    if (newDescriptor.set) descriptor.set = newDescriptor.set;
    if (newDescriptor.get) descriptor.get = newDescriptor.get;
    if (newDescriptor.writable) descriptor.writable = newDescriptor.writable;
    if (newDescriptor.value) descriptor.value = newDescriptor.value;
    if (newDescriptor.configurable) descriptor.configurable = newDescriptor.configurable;
    if (newDescriptor.enumerable) descriptor.enumerable = newDescriptor.enumerable;

    if (useObjectPropertyFunction) return Reflect.defineProperty(target, propertyKey, descriptor);
    return true;
  } catch (e) {
    return false;
  }
}

export = changeProperty;
/* eslint-enable no-param-reassign */
