'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const lib_1 = __importDefault(require('ts-runtime/lib'));
async function main() {
  const run = new Run({ network: 'mock' });
  class Event extends Jig {
    init(name) {
      let _nameType = lib_1.default.nullable(lib_1.default.string());
      lib_1.default.param('name', _nameType).assert(name);
      this.name = name;
    }
  }
  Event.deps = { lib_1 };
  const event = new Event('coachella');
  console.log('event', event);
}
main();
