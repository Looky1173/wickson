import { withThemesProvider } from 'themeprovider-storybook';
import { ThemeProvider } from 'styled-components';
import Baseline from '#components/Baseline';
import { Color, Constants } from '#/utils';

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

const lightTheme = { name: 'Light', ...Constants.DEFAULT_LIGHT_THEME };

const themes = [lightTheme];

/**
 * Serialize and deserialize theme to work around `values is not defined` error.
 */
function providerFn({ theme, children }) {
    const serialTheme = JSON.parse(JSON.stringify(theme));
    const newTheme = serialTheme;
    return (
        <ThemeProvider theme={newTheme}>
            <Baseline />
            {children}
        </ThemeProvider>
    );
}

export const decorators = [withThemesProvider(themes, { CustomThemeProvider: providerFn })];
