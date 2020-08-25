import * as vscode from 'vscode';

import {
  arrowFunctionComponentJsx,
  functionComponentJsx,
} from './templates/base/jsx';

import { functionComponentJs, arrowFunctionComponentJs } from './templates/js';

import createComponent from './utils/index';

export function activate(context: vscode.ExtensionContext) {
  const { registerCommand } = vscode.commands;
  let disposables = [
    /*Javascript*/
    registerCommand(
      'canducci.arrowFunctionComponentJs',
      async (args: any) => await createComponent(args, arrowFunctionComponentJs)
    ),
    registerCommand(
      'canducci.functionComponentJs',
      async (args: any) => await createComponent(args, functionComponentJs)
    ),
    /*JavascriptReact*/
    registerCommand(
      'canducci.arrowFunctionComponentJsx',
      async (args: any) =>
        await createComponent(args, arrowFunctionComponentJsx)
    ),
    registerCommand(
      'canducci.functionComponentJsx',
      async (args: any) => await createComponent(args, functionComponentJsx)
    ),
  ];

  context.subscriptions.push(...disposables);
}

export function deactivate() {}
