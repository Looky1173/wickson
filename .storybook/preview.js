import { withThemesProvider } from 'themeprovider-storybook';
import { ThemeProvider } from 'styled-components';
import Baseline from '#components/Baseline';
import { Color, Constants, createTheme } from '#/utils';

import '#/fonts/Open Sans/global.css';

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

const lightTheme = createTheme({ ...Constants.DEFAULT_LIGHT_THEME, typography: { fontFamily: '"Open Sans"' } }, { name: 'Light theme' });

const themes = [lightTheme];
console.log(themes)

/**
 * Serialize and deserialize theme to work around `values is not defined` error.
 */
function providerFn({ theme, children }) {
    const serialTheme = JSON.parse(JSON.stringify(theme));
    const newTheme = createTheme(serialTheme);
    console.log('NEW THEME', newTheme)
    return (
        <ThemeProvider theme={newTheme}>
            <Baseline />
            {children}
        </ThemeProvider>
    );
}

export const decorators = [withThemesProvider(themes, { CustomThemeProvider: providerFn })];
