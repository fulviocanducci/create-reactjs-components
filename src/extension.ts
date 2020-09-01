import * as vscode from 'vscode';
import { js, jsx, tsx } from './commands';

export function activate(context: vscode.ExtensionContext) {
  const disposables = [...js, ...jsx, ...tsx];
  context.subscriptions.push(...disposables);
}

export function deactivate() {}
