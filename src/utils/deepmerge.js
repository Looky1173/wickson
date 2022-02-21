// Modified version of https://github.com/mui-org/material-ui/blob/eadb4765f10a89556929a550b4e79fda60380c05/packages/mui-utils/src/deepmerge.ts

export function isPlainObject(item) {
    return item !== null && typeof item === 'object' && item?.constructor === Object;
}

export default function deepmerge(target, source, options = { clone: true }) {
    const output = options.clone ? { ...target } : target;

    if (isPlainObject(target) && isPlainObject(source)) {
        Object.keys(source).forEach((key) => {
            // Avoid prototype pollution
            if (key === '__proto__') {
                return;
            }

            if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
                // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
                output[key] = deepmerge(target[key], source[key], options);
            } else {
                output[key] = source[key];
            }
        });
    }

    return output;
}
