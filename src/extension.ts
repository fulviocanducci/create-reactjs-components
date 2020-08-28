import * as vscode from 'vscode';
import {
  arrowFunctionComponentJs,
  createContextArrowFunctionJs,
  createContextFunctionJs,
  functionComponentJs,
} from './templates/js';
import {
  arrowFunctionComponentJsx,
  createContextArrowFunctionJsx,
  createContextFunctionJsx,
  functionComponentJsx,
} from './templates/jsx';
import createComponent from './utils/index';
import {
  getProjectComponentFolder,
  getProjectContextFolder,
} from './utils/operations';

export function activate(context: vscode.ExtensionContext) {
  const { registerCommand } = vscode.commands;
  let disposables = [
    /*Javascript*/
    registerCommand(
      'canducci.arrowFunctionComponentJs',
      async (args: any) =>
        await createComponent(
          args,
          arrowFunctionComponentJs,
          getProjectComponentFolder
        )
    ),
    registerCommand(
      'canducci.functionComponentJs',
      async (args: any) =>
        await createComponent(
          args,
          functionComponentJs,
          getProjectComponentFolder
        )
    ),
    registerCommand(
      'canducci.createContextArrowFunctionJs',
      async (args: any) =>
        await createComponent(
          args,
          createContextArrowFunctionJs,
          getProjectContextFolder
        )
    ),
    registerCommand(
      'canducci.createContextFunctionJs',
      async (args: any) =>
        await createComponent(
          args,
          createContextFunctionJs,
          getProjectContextFolder
        )
    ),
    /*JavascriptReact*/
    registerCommand(
      'canducci.arrowFunctionComponentJsx',
      async (args: any) =>
        await createComponent(
          args,
          arrowFunctionComponentJsx,
          getProjectComponentFolder
        )
    ),
    registerCommand(
      'canducci.functionComponentJsx',
      async (args: any) =>
        await createComponent(
          args,
          functionComponentJsx,
          getProjectComponentFolder
        )
    ),
    registerCommand(
      'canducci.createContextArrowFunctionJsx',
      async (args: any) =>
        await createComponent(
          args,
          createContextArrowFunctionJsx,
          getProjectContextFolder
        )
    ),
    registerCommand(
      'canducci.createContextFunctionJsx',
      async (args: any) =>
        await createComponent(
          args,
          createContextFunctionJsx,
          getProjectContextFolder
        )
    ),
  ];

  context.subscriptions.push(...disposables);
}

export function deactivate() {}
