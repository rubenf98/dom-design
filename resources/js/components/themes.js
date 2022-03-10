export const light = {
    body: '#FFF',
    text: '#000000',
    toggleBorder: '#FFF',
    background: '#ffffff',
}

export const dark = {
    body: '#363537',
    text: '#ffffff',
    toggleBorder: '#6B8096',
    background: '#000000',
}

export function fetchTheme(aTheme) {
    return aTheme === 'light' ? light : dark;
}

export function fetchReverseTheme(aTheme) {
    return aTheme === 'light' ? dark : light;
}