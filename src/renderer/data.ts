import { Configuration } from './utils/InstallerConfiguration';

export const defaultConfiguration: Configuration = {
  version: 1,
  publishers: [
    {
      name: 'HEM GARAGE',
      key: 'hemgarage',
      logoUrl: 'https://cdn.discordapp.com/attachments/1333151439467315302/1333177563098513539/ico.png?ex=6797f1dc&is=6796a05c&hm=3d7a911e45e9211838e19371bfa51d994fea6bcfeab201a4efaf301766533813&',
      defs: [
        {
          kind: 'addonCategory',
          key: 'Scania',
          title: 'Scania',
        },
        {
          kind: 'addonCategory',
          key: 'scenery',
          title: 'Scenery',
        },
        {
          kind: 'addonCategory',
          key: 'simbridge',
          styles: ['align-bottom'],
        },
        /* {
          kind: 'externalApp',
          key: 'mcdu-server',
          prettyName: 'MCDU Server',
          detectionType: 'ws',
          url: 'ws://localhost:8380',
        },
        {
          kind: 'externalApp',
          key: 'simbridge-app',
          prettyName: 'SimBridge',
          detectionType: 'http',
          url: 'http://localhost:8380/health',
          killUrl: 'http://localhost:8380/health/kill',
          killMethod: 'GET',
        },
        {
          kind: 'externalApp',
          key: 'msfs',
          prettyName: 'MSFS',
          detectionType: 'tcp',
          port: 500,
        }, */
        {
          kind: 'addonCategory',
          key: 'ets2',
          title: 'Euro Truck Simulator 2',
        },
      ],
      addons: [
        {
          key: 'Scania_Astwo',
          name: 'Astwo',
          repoOwner: 'Jayther',
          repoName: 'ets2-mod',
          category: '@ets2',
          vehicleName: 'Scania Astwo',
          titleImageUrl: 'https://media.discordapp.net/attachments/1333151439467315302/1333457570794438667/dark.png?ex=6798f6a3&is=6797a523&hm=5a53da6d41f7d4bb98686b943282449af75ef8345f01226f5ec483fa4c9642a5&=&format=webp&quality=lossless&width=1440&height=353',
          titleImageUrlSelected: 'https://cdn.discordapp.com/attachments/1333151439467315302/1333457728298942464/light.png?ex=6798f6c8&is=6797a548&hm=27f59e66f5a37b4033f823701ed10a4a230fa5e447f3a16424ebc6a85a8b7eb0&',
          enabled: true,
          backgroundImageUrls: ['https://cdn.discordapp.com/attachments/1333151439467315302/1333458143266603120/ets2_20241224_234458_00.png?ex=6798f72b&is=6797a5ab&hm=d835c8e730a12950be7a1eb8f8fba5dac62cc4819791011e03265f81c18a66ab&'],
          shortDescription: 'Scania Astwo Mod for ETS2',
          description: 'This is a custom Scania mod for Euro Truck Simulator 2.',
          techSpecs: [
            {
              name: 'Type',
              value: 'Truck Mod',
            },
            {
              name: 'Compatibility',
              value: 'ETS2 1.48+',
            },
          ],
          targetDirectory: 'Euro Truck Simulator 2\\mod',
          alternativeNames: ['Scania_Astwo'],
          tracks: [
            {
              name: 'Stable',
              key: 'ets2-Astwo-stable',
              url: 'https://cdn.headwindsim.net/addons/a339x/release',
              alternativeUrls: [
                '',
              ],
              description: 'The stable version of the Scania mod for ETS2.',
              isExperimental: false,
              releaseModel: {
                type: 'fragmenter',
              },
            },
          ],
          dependencies: [],
          myInstallPage: {
            links: [],
            directories: [],
          },
          disallowedRunningExternalApps: [],
        },
                
      ],
      buttons: [
        {
          text: 'Documentation',
          action: 'openBrowser',
          url: 'https://docs.flybywiresim.com/',
        },
        {
          text: 'Website',
          action: 'openBrowser',
          url: 'https://flybywiresim.com/',
        },
        {
          text: 'Discord',
          action: 'openBrowser',
          url: 'https://discord.gg/flybywire',
        },
        {
          text: 'Twitter',
          action: 'openBrowser',
          url: 'https://twitter.com/FlyByWireSim',
          inline: true,
        },
      ],
    },
    
  ],
};
