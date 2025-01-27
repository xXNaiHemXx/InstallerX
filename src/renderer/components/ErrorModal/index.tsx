import React, { useState } from 'react';
import { setupInstallPath, setupEts2ModPath } from 'renderer/actions/install-path.utils';
import settings from 'renderer/rendererSettings';
import { Directories } from 'renderer/utils/Directories';
import * as fs from 'fs';
import { Button, ButtonType } from 'renderer/components/Button';
import * as os from 'os';
import { ipcRenderer } from 'electron';
import channels from 'common/channels';

export const ErrorModal = (): JSX.Element => {
  const [ets2ModPathError] = useState<boolean>(
    (!fs.existsSync(Directories.ets2ModPath()) && Directories.ets2ModPath() !== 'notInstalled') ||
      Directories.ets2ModPath() === 'C:\\',
  );
  const [installLocationError] = useState<boolean>(
    !fs.existsSync(Directories.installLocation()) ||
      Directories.installLocation() === 'C:\\' ||
      !fs.existsSync(Directories.tempLocation()),
  );

  const handleSelectEts2ModPath = async () => {
    const path = await setupEts2ModPath();
    if (path) {
      settings.set('mainSettings.ets2ModPath', path);
      settings.set('mainSettings.installPath', path);
      settings.set('mainSettings.separateTempLocation', false);
      settings.set('mainSettings.tempLocation', path);
      ipcRenderer.send(channels.window.reload);
    }
  };

  const handleSelectInstallPath = async () => {
    const path = await setupInstallPath();
    if (path) {
      settings.set('mainSettings.installPath', path);
      settings.set('mainSettings.separateTempLocation', false);
      settings.set('mainSettings.tempLocation', path);
      ipcRenderer.send(channels.window.reload);
    }
  };

  const handleNoEts2 = () => {
    settings.set('mainSettings.ets2ModPath', 'notInstalled');
    ipcRenderer.send(channels.window.reload);
  };

  const content = (): JSX.Element => {
    if (os.platform().toString() === 'linux') {
      if (ets2ModPathError) {
        return (
          <>
            <span className="w-3/5 text-center text-2xl">It seems like you're using Linux.</span>
            <span className="w-3/5 text-center text-2xl">
              We&apos;re unable to autodetect your install currently. Please set the correct location for the ETS2 mod
              path before we can continue. Usually, it is located in:
              <br />
              ~/.local/share/Euro Truck Simulator 2/mod
            </span>

            <Button type={ButtonType.Neutral} onClick={handleSelectEts2ModPath}>
              Select Path
            </Button>
            <Button type={ButtonType.Neutral} onClick={handleNoEts2}>
              I don&apos;t have Euro Truck Simulator 2 installed
            </Button>
          </>
        );
      }
      if (installLocationError) {
        return (
          <>
            <span className="w-3/5 text-center text-2xl">It seems like you're using Linux.</span>
            <span className="w-3/5 text-center text-2xl">
              We&apos;re unable to autodetect your install location (mod folder) currently. Please set the correct
              location before we can continue.
            </span>

            <Button type={ButtonType.Neutral} onClick={handleSelectInstallPath}>
              Select Path
            </Button>
          </>
        );
      }
    }
    if (ets2ModPathError) {
      return (
        <>
          <span className="w-3/5 text-center text-2xl">
            We couldn&apos;t determine the correct ETS2 mod path. Would you please help us? <br /> <br />
            It is usually located here: <br />
            &quot;Documents\Euro Truck Simulator 2\mod&quot;
          </span>

          <Button type={ButtonType.Neutral} onClick={handleSelectEts2ModPath}>
            Select Path
          </Button>
          <Button type={ButtonType.Neutral} onClick={handleNoEts2}>
            I don&apos;t have Euro Truck Simulator 2 installed
          </Button>
        </>
      );
    }
    if (installLocationError) {
      return (
        <>
          <span className="w-3/5 text-center text-2xl">Your mod folder is set to:</span>
          <pre className="mb-0 w-3/5 rounded-lg bg-gray-700 px-6 py-2.5 text-center font-mono text-2xl">
            {Directories.installLocation()}
          </pre>
          <span className="w-3/5 text-center text-2xl">
            but we couldn&apos;t find it there. Please set the correct location before we can continue.
          </span>

          <Button type={ButtonType.Neutral} onClick={handleSelectInstallPath}>
            Select
          </Button>
        </>
      );
    }
    return <></>;
  };

  if (installLocationError || ets2ModPathError) {
    return (
      <div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-y-5 bg-navy text-gray-100">
        <span className="text-5xl font-semibold">Something went wrong.</span>
        {content()}
      </div>
    );
  }
  return <></>;
};
