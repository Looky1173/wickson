import { withThemesProvider } from 'themeprovider-storybook';
import { ThemeProvider } from 'styled-components';
import { Color } from '#/utils';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'centered',
};

const lightTheme = { name: 'Light', palette: {primary: '#0060aa', onPrimary: '#ffffff', primaryContainer: '#d1e4ff', onPrimaryContainer: '#001c39' } };

const themes = [lightTheme];
console.log(themes);
console.log('COLOR', Color.adjust('#ffb600', 10));

/**
 * Serialize and deserialize theme to work around `values is not defined` error.
 */
function providerFn({ theme, children }) {
    const serialTheme = JSON.parse(JSON.stringify(theme));
    const newTheme = serialTheme;
    return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>;
}

export const decorators = [withThemesProvider(themes, { CustomThemeProvider: providerFn })];
