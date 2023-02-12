import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://mateozapata.xyz/icon.svg',
    brandTitle: 'Mateo Zapata Components',
    brandUrl: 'https://mateozapata.xyz',
  },
});
