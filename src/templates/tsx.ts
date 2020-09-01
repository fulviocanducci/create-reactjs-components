import {
  componentTypescriptBase,
  contextTypescriptBase,
  statelessComponentTypescriptBase,
  statelessContextTypescriptBase,
} from './base';

const component = (name: string) => componentTypescriptBase(name, 'tsx');
const statelessComponent = (name: string) => statelessComponentTypescriptBase(name, 'tsx');
const context = (name: string) => contextTypescriptBase(name, 'tsx');
const statelessContext = (name: string) => statelessContextTypescriptBase(name, 'tsx');

const tsx = {
  component,
  context,
  statelessComponent,
  statelessContext,
};

export default tsx;
