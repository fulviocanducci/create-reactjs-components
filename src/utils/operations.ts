import * as fs from 'fs';
import * as vscode from 'vscode';

export function mergerDir(...values: Array<string>): string {
  return values.join('');
}

export function getProjetctRoot(): string {
  return (vscode.workspace.workspaceFolders as any)[0].uri.fsPath;
}

export function getProjectComponentFolder(name: string, sep: string): string {
  return mergerDir(getProjetctRoot(), sep, 'src', sep, 'components', sep, name);
}

export function getProjectContextFolder(name: string, sep: string): string {
  return mergerDir(getProjetctRoot(), sep, 'src', sep, 'contexts', sep, name);
}

export function existsDir(dir: string): boolean {
  return fs.existsSync(dir);
}

export function createDir(dir: string): boolean {
  try {
    fs.mkdirSync(dir, { recursive: true });
    return true;
  } catch (error) {}
  return false;
}

export function createFile(dirFile: string, context: string): boolean {
  try {
    fs.writeFileSync(dirFile, context.trimLeft().trimRight());
    return true;
  } catch (error) {}
  return false;
}

export function openFileCreated(dirFile: string) {
  setTimeout(() => {
    vscode.workspace.openTextDocument(dirFile).then((editor) => {
      if (!editor) {
        return;
      }
      vscode.window.showTextDocument(editor);
    });
  }, 50);
}

export const optionsFileName: vscode.InputBoxOptions = {
  prompt: `Enter the name:`,
  placeHolder: `Component name`,
  ignoreFocusOut: true,
  valueSelection: [-1, -1],
};
