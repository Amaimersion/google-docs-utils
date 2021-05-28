let message = (
    '\n' +
    'google-docs-utils: ' +
    'WARNING! ' +
    'This library may no longer work after July 2021. ' +
    'See project README for more.' +
    '\n'
);

message = `\x1b[33m${message}\x1b[0m`; // yellow color

console.warn(message);
