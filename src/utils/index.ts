import * as path from 'path';
import * as vscode from 'vscode';
import {
  createDir,
  createFile,
  existsDir,
  mergerDir,
  openFileCreated,
  optionsFileName,
} from './operations';

async function createComponent(
  args: any,
  callBackTemplate: Function,
  callBackFolder: Function
) {
  const {
    showInputBox,
    showErrorMessage,
    showInformationMessage,
  } = vscode.window;
  const name = await showInputBox(optionsFileName);
  if (!name) {
    showErrorMessage('Operation canceled !!!');
  } else {
    const dir = callBackFolder(name, path.sep);
    const { content, extension, title } = callBackTemplate(name);
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

export default createComponent;
