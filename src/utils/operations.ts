import * as vscode from 'vscode';
import * as fs from 'fs';

function createFolderComponents() {}

export function getProjetctRoot(): string {
  return (vscode.workspace.workspaceFolders as any)[0].uri.fsPath;
}

export function getProjectComponentFolder(name: string | undefined): string {
  return `${getProjetctRoot()}/src/components/${name}`;
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
