import { componentBase, contextBase, statelessComponentBase, statelessContextBase } from './base';

const component = (name: string) => componentBase(name, 'js');
const statelessComponent = (name: string) => statelessComponentBase(name, 'js');
const context = (name: string) => contextBase(name, 'js');
const statelessContext = (name: string) => statelessContextBase(name, 'js');

const js = {
  component,
  context,
  statelessComponent,
  statelessContext,
};

export default js;
