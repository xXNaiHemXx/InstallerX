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
          key: 'Vehicle',
          title: 'Vehicle',
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
        {
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
        },
      ],
      addons: [
        {
          key: 'A32NX',
          name: 'A32NX',
          repoOwner: 'flybywiresim',
          repoName: 'aircVehicleraft',
          category: '@Vehicle',
          aircraftName: 'A320-251N',
          titleImageUrl: 'https://flybywirecdn.com/installer/media-assets/addon-titles/fbw-a32nx/dark.svg',
          titleImageUrlSelected: 'https://flybywirecdn.com/installer/media-assets/addon-titles/fbw-a32nx/light.svg',
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
        }
        
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
