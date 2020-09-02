import * as vscode from 'vscode';
import tsx from '../templates/tsx';
import { componentPath, contextPath, createCommandAsync } from '../utils/index';

const commands: Array<vscode.Disposable> = [
  vscode.commands.registerCommand(
    'canducci.tsx.component',
    async (args: any) => await createCommandAsync(args, tsx.component, componentPath, 'Component')
  ),
  vscode.commands.registerCommand(
    'canducci.tsx.statelessComponent',
    async (args: any) =>
      await createCommandAsync(args, tsx.statelessComponent, componentPath, 'Component')
  ),
  vscode.commands.registerCommand(
    'canducci.tsx.context',
    async (args: any) => await createCommandAsync(args, tsx.context, contextPath, 'Context')
  ),
  vscode.commands.registerCommand(
    'canducci.tsx.statelessContext',
    async (args: any) =>
      await createCommandAsync(args, tsx.statelessContext, contextPath, 'Context')
  ),
];

export default commands;
