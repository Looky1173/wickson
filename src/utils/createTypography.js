import deepmerge from './deepmerge';

const caseAllCaps = {
    textTransform: 'uppercase',
};
const defaultFontFamily = '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export default function createTypography(typography = {}) {
    const {
        fontFamily = defaultFontFamily,
        fontSize = 14, // In px
        fontWeightLight = 300,
        fontWeightRegular = 400,
        fontWeightMedium = 500,
        fontWeightBold = 700,
        fontWeightExtraBold = 800,
        // Tell Wickson what's the font-size on the html element.
        // 16px is the default font-size used by browsers.
        htmlFontSize = 16, // In px
        lineHeight = 1.5,
        pxToRem: pxToRem2,
        ...other
    } = typography;

    if (typeof fontSize !== 'number') {
        console.error('Wickson: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
        console.error('Wickson: `htmlFontSize` is required to be a number.');
    }

    const coefficient = fontSize / 14;
    const pxToRem = pxToRem2 || ((size) => `${(size / htmlFontSize) * coefficient}rem`);
    const buildVariant = (fontWeight, size, height, casing) => ({
        fontFamily,
        fontWeight,
        fontSize: (variation = 0) => pxToRem((size + variation)),
        lineHeight: height || lineHeight,
        ...casing,
    });

    const variants = {
        h1: buildVariant(fontWeightLight, 96, null),
        h2: buildVariant(fontWeightLight, 60, null),
        h3: buildVariant(fontWeightRegular, 48, null),
        h4: buildVariant(fontWeightRegular, 34, null),
        h5: buildVariant(fontWeightRegular, 24, null),
        h6: buildVariant(fontWeightMedium, 20, null),
        subtitle1: buildVariant(fontWeightRegular, 16, null),
        subtitle2: buildVariant(fontWeightMedium, 14, null),
        body1: buildVariant(fontWeightRegular, 16, null),
        body2: buildVariant(fontWeightRegular, 14, null),
        button: buildVariant(fontWeightMedium, 18, null),
        caption: buildVariant(fontWeightRegular, 12, null),
        overline: buildVariant(fontWeightRegular, 12, null, caseAllCaps),
    };

    return deepmerge(
        {
            htmlFontSize,
            pxToRem,
            fontFamily,
            fontSize,
            fontWeightLight,
            fontWeightRegular,
            fontWeightMedium,
            fontWeightBold,
            fontWeightExtraBold,
            lineHeight,
            ...variants,
        },
        other,
        {
            clone: false, // No need to clone deep
        },
    );
}
