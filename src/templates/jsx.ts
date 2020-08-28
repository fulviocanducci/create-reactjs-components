import {
  arrowFunctionComponentBase,
  createContextArrowFunctionBase,
  createContextFunctionBase,
  functionComponentBase,
} from './base/index';

const arrowFunctionComponentJsx = (name: string) =>
  arrowFunctionComponentBase(name, 'jsx');
const functionComponentJsx = (name: string) =>
  functionComponentBase(name, 'jsx');

const createContextArrowFunctionJsx = (name: string) =>
  createContextArrowFunctionBase(name, 'jsx');
const createContextFunctionJsx = (name: string) =>
  createContextFunctionBase(name, 'jsx');

export {
  arrowFunctionComponentJsx,
  functionComponentJsx,
  createContextArrowFunctionJsx,
  createContextFunctionJsx,
};
