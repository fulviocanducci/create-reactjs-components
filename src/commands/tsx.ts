import * as vscode from 'vscode';
import tsx from '../templates/tsx';
import { componentFolder, contextFolder, createCommand } from '../utils/index';

const commands: Array<vscode.Disposable> = [
  vscode.commands.registerCommand(
    'canducci.tsx.component',
    async (args: any) => await createCommand(args, tsx.component, componentFolder, 'Component')
  ),
  vscode.commands.registerCommand(
    'canducci.tsx.statelessComponent',
    async (args: any) =>
      await createCommand(args, tsx.statelessComponent, componentFolder, 'Component')
  ),
  vscode.commands.registerCommand(
    'canducci.tsx.context',
    async (args: any) => await createCommand(args, tsx.context, contextFolder, 'Context')
  ),
  vscode.commands.registerCommand(
    'canducci.tsx.statelessContext',
    async (args: any) => await createCommand(args, tsx.statelessContext, contextFolder, 'Context')
  ),
];

export default commands;
