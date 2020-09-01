import {
  arrowFunctionComponentBase,
  createContextArrowFunctionBase,
  createContextFunctionBase,
  functionComponentBase,
} from './base/index';

const arrowFunctionComponentJs = (name: string) => arrowFunctionComponentBase(name, 'js');
const functionComponentJs = (name: string) => functionComponentBase(name, 'js');

const createContextArrowFunctionJs = (name: string) => createContextArrowFunctionBase(name, 'js');
const createContextFunctionJs = (name: string) => createContextFunctionBase(name, 'js');

export {
  functionComponentJs,
  arrowFunctionComponentJs,
  createContextArrowFunctionJs,
  createContextFunctionJs,
};
