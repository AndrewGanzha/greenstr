function getImageUrl(name) {
    return new URL(``, import.meta.url).href;
}

export { getImageUrl };
