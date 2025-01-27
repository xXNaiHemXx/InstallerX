import React, { useEffect, useState } from 'react';
import { checkEts2ModExists } from '../utils/InstallerConfiguration';

const AddonComponent: React.FC<{ addonKey: string }> = ({ addonKey }) => {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // ตรวจสอบว่ามีไฟล์อยู่ในโฟลเดอร์ mod หรือไม่
    setIsInstalled(checkEts2ModExists(addonKey));
  }, [addonKey]);

  const handleInstall = () => {
    console.log(`Installing mod: ${addonKey}`);
    // Logic สำหรับดาวน์โหลดและติดตั้งไฟล์ .scs
  };

  return (
    <div>
      <h3>Addon: {addonKey}</h3>
      {isInstalled ? (
        <p>Mod is already installed in the ETS2 mod folder.</p>
      ) : (
        <button onClick={handleInstall}>Install</button>
      )}
    </div>
  );
};

export default AddonComponent;
