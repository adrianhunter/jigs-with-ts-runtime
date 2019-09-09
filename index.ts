import t from 'ts-runtime/lib';

declare var Run: any;
type Run = any;

declare class Jig {
  static deps: any;
  constructor(foo: unknown);
  origin: string;
  location: string;
  owner: string;
  sync: () => void;
}

async function main() {
  const run = new Run({ network: 'mock' });

  class Event extends Jig {
    name: string;

    init(name: string) {
      this.name = name;
    }
  }

  const event = new Event('coachella');
  console.log('event', event);
}
main();
