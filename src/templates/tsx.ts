import {
  arrowFunctionComponentTypescriptBase,
  arrowFunctionContextTypescriptBase,
  functionComponentTypescriptBase,
  functionContextTypescriptBase,
} from './base/index';

const arrowFunctionComponentTs = (name: string) =>
  arrowFunctionComponentTypescriptBase(name, 'tsx');

const functionComponentTs = (name: string) =>
  functionComponentTypescriptBase(name, 'tsx');

const functionContextTs = (name: string) =>
  functionContextTypescriptBase(name, 'tsx');
const arrowFunctionContextTs = (name: string) =>
  arrowFunctionContextTypescriptBase(name, 'tsx');

export {
  arrowFunctionComponentTs,
  functionComponentTs,
  functionContextTs,
  arrowFunctionContextTs,
};
