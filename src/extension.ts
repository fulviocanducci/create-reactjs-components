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
import {
  arrowFunctionComponentTs,
  arrowFunctionContextTs,
  functionComponentTs,
  functionContextTs,
} from './templates/tsx';
import { default as createCommand, default as createComponent } from './utils/index';
import { getProjectComponentFolder, getProjectContextFolder } from './utils/operations';

export function activate(context: vscode.ExtensionContext) {
  const { registerCommand } = vscode.commands;
  let disposables = [
    /*Javascript*/
    registerCommand(
      'canducci.arrowFunctionComponentJs',
      async (args: any) =>
        await createCommand(args, arrowFunctionComponentJs, getProjectComponentFolder, 'Component')
    ),
    registerCommand(
      'canducci.functionComponentJs',
      async (args: any) =>
        await createCommand(args, functionComponentJs, getProjectComponentFolder, 'Component')
    ),
    registerCommand(
      'canducci.createContextArrowFunctionJs',
      async (args: any) =>
        await createCommand(args, createContextArrowFunctionJs, getProjectContextFolder, 'Context')
    ),
    registerCommand(
      'canducci.createContextFunctionJs',
      async (args: any) =>
        await createCommand(args, createContextFunctionJs, getProjectContextFolder, 'Context')
    ),
    /*JavascriptReact*/
    registerCommand(
      'canducci.arrowFunctionComponentJsx',
      async (args: any) =>
        await createCommand(args, arrowFunctionComponentJsx, getProjectComponentFolder, 'Component')
    ),
    registerCommand(
      'canducci.functionComponentJsx',
      async (args: any) =>
        await createCommand(args, functionComponentJsx, getProjectComponentFolder, 'Component')
    ),
    registerCommand(
      'canducci.createContextArrowFunctionJsx',
      async (args: any) =>
        await createCommand(args, createContextArrowFunctionJsx, getProjectContextFolder, 'Context')
    ),
    registerCommand(
      'canducci.createContextFunctionJsx',
      async (args: any) =>
        await createCommand(args, createContextFunctionJsx, getProjectContextFolder, 'Context')
    ),
    /* React Typescript*/
    registerCommand(
      'canducci.arrowFunctionComponentTs',
      async (args: any) =>
        await createCommand(args, arrowFunctionComponentTs, getProjectComponentFolder, 'Component')
    ),
    registerCommand(
      'canducci.functionComponentTs',
      async (args: any) =>
        await createComponent(args, functionComponentTs, getProjectComponentFolder, 'Component')
    ),
    registerCommand(
      'canducci.functionContextTs',
      async (args: any) =>
        await createComponent(args, functionContextTs, getProjectContextFolder, 'Context')
    ),
    registerCommand(
      'canducci.arrowFunctionContextTs',
      async (args: any) =>
        await createComponent(args, arrowFunctionContextTs, getProjectContextFolder, 'Context')
    ),
  ];

  context.subscriptions.push(...disposables);
}

export function deactivate() {}
