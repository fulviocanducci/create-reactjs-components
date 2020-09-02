import * as fs from 'fs';
import { pascalCase } from 'pascal-case';
import * as path from 'path';
import * as vscode from 'vscode';

interface IPath {
  dir: string;
  file: string;
}

const joinDir = (...values: Array<string>): string => values.join('');

const getPath = (name: string, type: string, extension: string): IPath => {
  const fsPath = (vscode.workspace.workspaceFolders as any)[0].uri.fsPath;
  const sep = path.sep;
  const dir = joinDir(fsPath, sep, 'src', sep, type, sep, name);
  const file = joinDir(dir, path.sep, 'index.', extension);
  return {
    dir,
    file,
  };
};

export const componentPath = (name: string, extension: string): IPath =>
  getPath(name, 'components', extension);

export const contextPath = (name: string, extension: string): IPath =>
  getPath(name, 'contexts', extension);

const existsDir = (dir: string): boolean => fs.existsSync(dir);

const createDir = (dir: string) => {
  try {
    return fs.mkdirSync(dir, { recursive: true });
  } catch (error) {}
};

const createFile = (file: string, context: string) => {
  try {
    fs.writeFileSync(file, context.trimLeft().trimRight());
  } catch (error) {}
};

const openFile = (file: string) => {
  vscode.workspace.openTextDocument(file).then((editor) => {
    if (!editor) {
      return;
    }
    vscode.window.showTextDocument(editor, { preview: false });
  });
};

const optionsFileName = (title: string): vscode.InputBoxOptions => {
  return {
    prompt: `Enter the name or names separated by commas: `,
    placeHolder: `${title}: enter name or names separated by commas`,
    ignoreFocusOut: true,
    valueSelection: [-1, -1],
  };
};

const multiNames = (name: string): Array<string> => {
  const names: Array<string> = name.split(',').map((v) => pascalCase(v.trim()));
  return names;
};

const nameRules = (name: string | null): boolean => {
  return (
    name !== null &&
    name.length > 0 &&
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(name.charAt(0)) === false
  );
};

export const createCommandAsync = async (
  args: any,
  callBackTemplate: Function,
  callBackFolder: Function,
  title: string
) => {
  const { showInputBox, showErrorMessage, showInformationMessage } = vscode.window;
  let names = await showInputBox(optionsFileName(title));
  if (!names) {
    showErrorMessage('Operation canceled !!!');
  } else {
    let created: Array<string> = [];
    let existed: Array<string> = [];
    let errors: Array<string> = [];
    for (const name of multiNames(names)) {
      if (nameRules(name)) {
        const { content, extension } = callBackTemplate(name);
        const { dir, file } = callBackFolder(name, extension);
        try {
          if (!existsDir(dir)) {
            createDir(dir);
            createFile(file, content);
            openFile(file);
            created.push(name);
          } else {
            existed.push(name);
          }
        } catch (error) {
          await showErrorMessage(error);
        }
      } else {
        errors.push(name.length === 0 ? 'empty' : name);
      }
    }

    if (created.length > 0) {
      showInformationMessage(`${title} ${created.join(', ')} successfully created.`);
    }
    if (existed.length > 0) {
      showInformationMessage(`${title} ${existed.join(', ')} exists.`);
    }
    if (errors.length > 0) {
      showErrorMessage(`${title} ${errors.join(', ')} is invalid.`);
    }
  }
};
