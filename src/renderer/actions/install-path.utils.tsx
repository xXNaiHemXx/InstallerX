import settings from 'renderer/rendererSettings';
import { dialog } from '@electron/remote';
import fs from 'fs';
import path from 'path';

const ets2ModFolder = path.join(
  require('os').homedir(),
  'Documents',
  'Euro Truck Simulator 2',
  'mod'
);

const selectPath = async (currentPath: string, dialogTitle: string, setting: string): Promise<string> => {
  const path = await dialog.showOpenDialog({
    title: dialogTitle,
    defaultPath: typeof currentPath === 'string' ? currentPath : '',
    properties: ['openDirectory'],
  });

  if (path.filePaths[0]) {
    settings.set(setting, path.filePaths[0]);
    return path.filePaths[0];
  } else {
    return '';
  }
};

export const setupEts2ModPath = async (): Promise<string> => {
  const currentPath = ets2ModFolder;

  if (fs.existsSync(ets2ModFolder)) {
    const { response } = await dialog.showMessageBox({
      title: 'ETS2 Mod Setup',
      message: 'We found the default mod folder for ETS2. Do you want to use it?',
      type: 'question',
      buttons: ['Yes', 'No', 'Select Custom Directory'],
    });

    switch (response) {
      case 0: // Yes
        settings.set('mainSettings.ets2ModPath', ets2ModFolder);
        return ets2ModFolder;
      case 2: // Select Custom Directory
        break;
      default: // No
        return '';
    }
  }

  return await selectPath(currentPath, 'Select your ETS2 mod directory', 'mainSettings.ets2ModPath');
};

export const setupInstallPath = async (): Promise<string> => {
  const currentPath = ets2ModFolder;

  return await selectPath(currentPath, 'Select your install directory', 'mainSettings.installPath');
};

export const setupTempLocation = async (): Promise<string> => {
  const currentPath = ets2ModFolder;

  return await selectPath(currentPath, 'Select a location for temporary folders', 'mainSettings.tempLocation');
};
