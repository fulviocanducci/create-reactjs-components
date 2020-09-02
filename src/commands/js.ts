import * as vscode from 'vscode';
import js from '../templates/js';
import { componentPath, contextPath, createCommandAsync } from '../utils/index';

const commands: Array<vscode.Disposable> = [
  vscode.commands.registerCommand(
    'canducci.js.component',
    async (args: any) => await createCommandAsync(args, js.component, componentPath, 'Component')
  ),
  vscode.commands.registerCommand(
    'canducci.js.statelessComponent',
    async (args: any) =>
      await createCommandAsync(args, js.statelessComponent, componentPath, 'Component')
  ),
  vscode.commands.registerCommand(
    'canducci.js.context',
    async (args: any) => await createCommandAsync(args, js.context, contextPath, 'Context')
  ),
  vscode.commands.registerCommand(
    'canducci.js.statelessContext',
    async (args: any) => await createCommandAsync(args, js.statelessContext, contextPath, 'Context')
  ),
];

export default commands;
