import * as vscode from 'vscode';

import {
  getProjectComponentFolder,
  optionsFileName,
  existsDir,
  createFile,
  createDir,
  openFileCreated,
} from './operations';

async function createComponent(args: any, callBack: Function) {
  const {
    showInputBox,
    showErrorMessage,
    showInformationMessage,
  } = vscode.window;
  const name = await showInputBox(optionsFileName);
  if (!name) {
    showErrorMessage('Operation canceled !!!');
  } else {
    const dir = getProjectComponentFolder(name);
    const { content, extension } = callBack(name);
    const dirFile = `${dir}/index.${extension}`;
    try {
      if (!existsDir(dir)) {
        createDir(dir);
        createFile(dirFile, content);
        openFileCreated(dirFile);
        showInformationMessage('Component successfully created.');
      } else {
        showInformationMessage('Component exists');
      }
    } catch (error) {
      showInformationMessage(error);
    }
  }
}

export default createComponent;
