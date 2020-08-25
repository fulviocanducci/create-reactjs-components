import { aFctComponent, fctComponent } from './base/index';
const arrowFunctionComponentJs = (name: string) => aFctComponent(name, 'js');
const functionComponentJs = (name: string) => fctComponent(name, 'js');

export { functionComponentJs, arrowFunctionComponentJs };
