function LogClass<T extends { new(...args: any[]): {} }>(constructor: T) {
  console.log(`Class ${constructor.name} was instantiated.`);
}

@LogClass
class User {
  constructor(public name: string) {}
}

const user = new User("Alice");