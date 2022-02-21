import deepmerge from './deepmerge';
import createTypography from './createTypography';

function createTheme(options = {}, ...args) {
    const { palette: paletteInput, typography: typographyInput, ...other } = options;

    const palette = paletteInput
    const typography = createTypography(typographyInput);

    let theme = { direction: 'ltr', palette, snappy: false, typography };

    theme = deepmerge(theme, other);
    theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);

    return theme;
}

export default createTheme;
