import { Configuration } from './utils/InstallerConfiguration';

export const defaultConfiguration: Configuration = {
  version: 1,
  publishers: [
    {
      name: 'FlyByWire Simulations',
      key: 'flybywiresim',
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
          name: 'Scania Mod',
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
              key: 'ets2-scania-stable',
              url: 'https://cdn.discordapp.com/attachments/1333151439467315302/1333458623652823141/AS2NX.scs?ex=6798f79e&is=6797a61e&hm=d46e994d87b92010c20edad99097a43d81278ece6e00eb13fd5e70abec5b7998&',
              alternativeUrls: [
                'https://yourbackupcdn.com/path-to-your-stable-version.zip',
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
        
        /* {
          key: 'A32NX',
          name: 'AstwoX',
          repoOwner: 'flybywiresim',
          repoName: 'Scania',
          category: '@Scania',
          vehicleName: 'Astwo2.2',
          titleImageUrl: 'https://media.discordapp.net/attachments/1333151439467315302/1333457570794438667/dark.png?ex=6798f6a3&is=6797a523&hm=5a53da6d41f7d4bb98686b943282449af75ef8345f01226f5ec483fa4c9642a5&=&format=webp&quality=lossless&width=1440&height=353',
          titleImageUrlSelected: 'https://cdn.discordapp.com/attachments/1333151439467315302/1333457728298942464/light.png?ex=6798f6c8&is=6797a548&hm=27f59e66f5a37b4033f823701ed10a4a230fa5e447f3a16424ebc6a85a8b7eb0&',
          enabled: true,
          // TODO: Change this
          backgroundImageUrls: ['https://cdn.discordapp.com/attachments/1333151439467315302/1333151553359446119/ets2_20241225_201631_00.png?ex=6797d9a3&is=67968823&hm=edeb54d06bb388f415db5d273790227220e562c9a8319234033695039ac7c3a8&'],
          shortDescription: 'Airbus A320neo Series',
          description:
            'The A320neo (new engine option) is one of many upgrades introduced by Airbus to help maintain ' +
            'its A320 product line’s position as the world’s most advanced and fuel-efficient single-aisle ' +
            'aircraft family. The baseline A320neo jetliner has a choice of two new-generation engines ' +
            '(the PurePower PW1100G-JM from Pratt and Whitney and the LEAP-1A from CFM International) ' +
            'and features large, fuel-saving wingtip devices known as Sharklets.',
          techSpecs: [
            {
              name: 'Engines',
              value: 'CFM LEAP 1A-26',
            },
            {
              name: 'APU',
              value: 'APS3200',
            },
          ],
          targetDirectory: 'flybywire-aircraft-a320-neo',
          alternativeNames: ['A32NX', 'a32nx'],
          tracks: [
            {
              name: 'Stable',
              key: 'a32nx-stable',
              url: 'https://flybywirecdn.com/addons/a32nx/stable',
              alternativeUrls: [
                'external/a32nx/stable',
                // move bunnycdn users to cloudflare
                'https://cdn.flybywiresim.com/addons/a32nx/stable',
              ],
              description:
                'Stable is our variant that has the least bugs and best performance. ' +
                'This version will not always be up to date but we guarantee its compatibility ' +
                'with each major patch from MSFS.',
              isExperimental: false,
              releaseModel: {
                type: 'fragmenter',
              },
            },
            {
              name: 'Development',
              key: 'a32nx-dev',
              url: 'https://flybywirecdn.com/addons/a32nx/master',
              alternativeUrls: [
                // move old experimental users over to dev
                'https://cdn.flybywiresim.com/addons/a32nx/cfbw-cap',
                'https://cdn.flybywiresim.com/addons/a32nx/cfbw',
                'external/a32nx/master',
                // move bunnycdn users to cloudflare
                'https://cdn.flybywiresim.com/addons/a32nx/master',
                // move exp users to dev
                'https://flybywirecdn.com/addons/a32nx/experimental',
                'external/a32nx/experimental',
                'https://cdn.flybywiresim.com/addons/a32nx/experimental',
                'https://github.com/flybywiresim/a32nx/releases/download/assets/experimental/',
              ],
              description:
                'Development will have the latest features that will end up in the next stable. ' +
                "Although every change is QA-tested, bugs are a little more likely. It updates whenever something is added to the 'master' " +
                'branch on Github. Please visit our discord for support.',
              isExperimental: false,
              releaseModel: {
                type: 'fragmenter',
              },
            },
          ],
          dependencies: [
            {
              addon: '@flybywiresim/simbridge',
              optional: true,
              modalText:
                'SimBridge allows the A32NX to expose remote tools like the Web MCDU, as well as use the external terrain database.',
            },
          ],
          incompatibleAddons: [
            // title: the exact title as it appears in the manifest.json
            // creator: the exact creator as it appears in the manifest.json
            // packageVersion syntax follows: https://www.npmjs.com/package/semver
            // description: a short description of why the addon is incompatible
          ],
          myInstallPage: {
            links: [
              {
                url: 'https://docs.flybywiresim.com/',
                title: 'Documentation',
              },
            ],
            directories: [
              {
                location: {
                  in: 'packageCache',
                  path: 'work',
                },
                title: 'Work Folder',
              },
            ],
          },
          disallowedRunningExternalApps: ['@/msfs', '@/mcdu-server'],
        } */
        
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
    {
      name: 'Salty Simulations',
      key: 'salty',
      logoUrl: 'https://flybywirecdn.com/installer/media-assets/publisher-icons/salty/0.svg',
      defs: [
        {
          kind: 'addonCategory',
          key: 'Scania',
          title: 'Scania',
        },
      ],
      addons: [
        {
          key: '74S',
          name: '74S',
          repoOwner: 'saltysimulations',
          repoName: 'salty-747',
          category: '@Scania',
          vehicleName: 'superlighting',
          titleImageUrl: 'https://cdn.discordapp.com/attachments/1333151439467315302/1333451607253188608/dark.svg?ex=6798f115&is=67979f95&hm=91e1b92a7e2f62cdf24d864f4d5a67a8d15ded10a03d1adb1479f7e3108011f2&',
          titleImageUrlSelected: 'https://cdn.discordapp.com/attachments/1333151439467315302/1333456061180416010/light.svg?ex=6798f53b&is=6797a3bb&hm=74d2d0a720917517f7fbe700b2bf49bf39b33a841d0826568e59ba42068b9fcf&',
          enabled: true,
          backgroundImageUrls: [
            'https://cdn.discordapp.com/attachments/1333151439467315302/1333450491757334649/442492006_4591716394387522_6545708205429792474_n.png?ex=6798f00b&is=67979e8b&hm=72b559def60a3c56a383ee5ced94c4481caa6c01cdda036a038bae8dea57a3f0&',
          ],
          shortDescription: 'Boeing 747-8I',
          description:
            'The Boeing 747-8 is the largest variant of the 747. ' +
            'It features a thicker and wider wing, allowing it to hold more fuel, as well as raked wingtips. ' +
            'The aircraft, powered by the more efficient General Electric GEnx engines, ' +
            'can carry 467 passengers in a typical three-class configuration, and has a range of 7,730 nautical miles.',
          techSpecs: [
            {
              name: 'Engines',
              value: 'GEnx-2B',
            },
          ],
          targetDirectory: 'salty-747',
          tracks: [
            {
              name: 'Stable',
              key: '74S-stable',
              url: 'https://github.com/saltysimulations/salty-747/releases/download/vinstaller-stable/',
              description:
                'Stable is our variant that has the least bugs and best performance. ' +
                'This version will not always be up to date but we guarantee its compatibility ' +
                'with each major patch from MSFS.',
              isExperimental: false,
              releaseModel: {
                type: 'githubRelease',
              },
            },
            {
              name: 'Development',
              key: '74S-dev',
              url: 'https://github.com/saltysimulations/salty-747/releases/download/vinstaller/',
              description:
                'The development version has all the latest features that will end up in the next stable. ' +
                'You may encounter bugs more frequently.',
              isExperimental: false,
              releaseModel: {
                type: 'githubBranch',
                branch: 'master',
              },
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Discord',
          action: 'openBrowser',
          url: 'https://discord.gg/S4PJDwk',
        },
        {
          text: 'Twitter',
          action: 'openBrowser',
          url: 'https://twitter.com/Salty_Sim',
          inline: true,
        },
      ],
    },
  ],
};
