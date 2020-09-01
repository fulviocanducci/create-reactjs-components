import * as vscode from 'vscode';
import jsx from '../templates/jsx';
import { componentFolder, contextFolder, createCommand } from '../utils/index';

const commands: Array<vscode.Disposable> = [
  vscode.commands.registerCommand(
    'canducci.jsx.component',
    async (args: any) => await createCommand(args, jsx.component, componentFolder, 'Component')
  ),
  vscode.commands.registerCommand(
    'canducci.jsx.statelessComponent',
    async (args: any) =>
      await createCommand(args, jsx.statelessComponent, componentFolder, 'Component')
  ),
  vscode.commands.registerCommand(
    'canducci.jsx.context',
    async (args: any) => await createCommand(args, jsx.context, contextFolder, 'Context')
  ),
  vscode.commands.registerCommand(
    'canducci.jsx.statelessContext',
    async (args: any) => await createCommand(args, jsx.statelessContext, contextFolder, 'Context')
  ),
];

export default commands;
