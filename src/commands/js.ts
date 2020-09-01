import * as vscode from 'vscode';
import js from '../templates/js';
import { componentFolder, contextFolder, createCommand } from '../utils/index';

const commands: Array<vscode.Disposable> = [
  vscode.commands.registerCommand(
    'canducci.js.component',
    async (args: any) => await createCommand(args, js.component, componentFolder, 'Component')
  ),
  vscode.commands.registerCommand(
    'canducci.js.statelessComponent',
    async (args: any) =>
      await createCommand(args, js.statelessComponent, componentFolder, 'Component')
  ),
  vscode.commands.registerCommand(
    'canducci.js.context',
    async (args: any) => await createCommand(args, js.context, contextFolder, 'Context')
  ),
  vscode.commands.registerCommand(
    'canducci.js.statelessContext',
    async (args: any) => await createCommand(args, js.statelessContext, contextFolder, 'Context')
  ),
];

export default commands;
