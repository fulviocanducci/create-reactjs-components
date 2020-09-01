import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

export function mergerDir(...values: Array<string>): string {
  return values.join('');
}

export function getProjetctRoot(): string {
  return (vscode.workspace.workspaceFolders as any)[0].uri.fsPath;
}

export function componentFolder(name: string, sep: string): string {
  return mergerDir(getProjetctRoot(), sep, 'src', sep, 'components', sep, name);
}

export function contextFolder(name: string, sep: string): string {
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

export const optionsFileName = (title: string): vscode.InputBoxOptions => {
  return {
    prompt: `Enter the ${title.toLowerCase()} name: `,
    placeHolder: `${title} name`,
    ignoreFocusOut: true,
    valueSelection: [-1, -1],
  };
};

export async function createCommand(
  args: any,
  callBackTemplate: Function,
  callBackFolder: Function,
  title: string
) {
  const { showInputBox, showErrorMessage, showInformationMessage } = vscode.window;
  const name = await showInputBox(optionsFileName(title));
  if (!name) {
    showErrorMessage('Operation canceled !!!');
  } else {
    const dir = callBackFolder(name, path.sep);
    const { content, extension } = callBackTemplate(name);
    const dirFile = mergerDir(dir, path.sep, 'index.', extension);
    try {
      if (!existsDir(dir)) {
        createDir(dir);
        createFile(dirFile, content);
        openFileCreated(dirFile);
        showInformationMessage(`${title} successfully created.`);
      } else {
        showInformationMessage(`${title} exists`);
      }
    } catch (error) {
      showInformationMessage(error);
    }
  }
}
