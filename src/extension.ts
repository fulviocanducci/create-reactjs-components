import * as vscode from 'vscode';
import { js, jsx, tsx } from './commands';

export function activate(context: vscode.ExtensionContext) {
  //vscode.commands.executeCommand('setContext', 'inReactJsProject', true);
  const disposables = [...js, ...jsx, ...tsx];
  context.subscriptions.push(...disposables);
}

export function deactivate() {}
