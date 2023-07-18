import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  staticDirs: [
    {
      from: '../assets',
      to: '/assets',
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: 'libs/ui/next.config.js',
      builder: {
        useSWC: true,
      },
    },
  },
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'expo',
          'react-native',
          'react-native-web',
          'react-native-reanimated',
          'react-native-svg',
          'react-native-gesture-handler',
        ],
        modulesToAlias: {
          'react-native$': 'react-native-web',
        },
        babelPugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
        ],
      },
    },
  ],
};

export default config;
