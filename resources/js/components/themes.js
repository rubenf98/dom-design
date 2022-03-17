export const light = {
    body: '#FFF',
    text: '#000000',
    backgroundWithOpacity: 'rgba(255, 255, 255, 0.75)',
    toggleBorder: '#FFF',
    background: '#ffffff',
}

export const dark = {
    body: '#363537',
    text: '#ffffff',
    backgroundWithOpacity: 'rgba(0, 0, 0, 0.75)',
    toggleBorder: '#6B8096',
    background: '#000000',
}

export function fetchTheme(aTheme) {
    return aTheme === 'light' ? light : dark;
}

export function fetchReverseTheme(aTheme) {
    return aTheme === 'light' ? dark : light;
}