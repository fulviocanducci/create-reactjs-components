import { componentBase, contextBase, statelessComponentBase, statelessContextBase } from './base';

const component = (name: string) => componentBase(name, 'jsx');
const statelessComponent = (name: string) => statelessComponentBase(name, 'jsx');
const context = (name: string) => contextBase(name, 'jsx');
const statelessContext = (name: string) => statelessContextBase(name, 'jsx');

const jsx = {
  component,
  context,
  statelessComponent,
  statelessContext,
};

export default jsx;
