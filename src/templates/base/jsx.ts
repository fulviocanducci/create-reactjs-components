import { aFctComponent, fctComponent } from './../base/index';
const arrowFunctionComponentJsx = (name: string) => aFctComponent(name, 'jsx');
const functionComponentJsx = (name: string) => fctComponent(name, 'jsx');

export { functionComponentJsx, arrowFunctionComponentJsx };
