var slugify = require('slugify')

export function Slugify(s: string) {
    return slugify(s, {
        lower: true,
    });
}