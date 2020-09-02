import * as vscode from 'vscode';
import jsx from '../templates/jsx';
import { componentPath, contextPath, createCommandAsync } from '../utils/index';

const commands: Array<vscode.Disposable> = [
  vscode.commands.registerCommand(
    'canducci.jsx.component',
    async (args: any) => await createCommandAsync(args, jsx.component, componentPath, 'Component')
  ),
  vscode.commands.registerCommand(
    'canducci.jsx.statelessComponent',
    async (args: any) =>
      await createCommandAsync(args, jsx.statelessComponent, componentPath, 'Component')
  ),
  vscode.commands.registerCommand(
    'canducci.jsx.context',
    async (args: any) => await createCommandAsync(args, jsx.context, contextPath, 'Context')
  ),
  vscode.commands.registerCommand(
    'canducci.jsx.statelessContext',
    async (args: any) =>
      await createCommandAsync(args, jsx.statelessContext, contextPath, 'Context')
  ),
];

export default commands;
