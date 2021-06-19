function fox() {
    return `https://randomfox.ca/images/${Math.floor((Math.random() * 122) + 1)}.jpg`
}

function customfox(urls: Array<String>) {
    return urls[Math.floor((Math.random() * urls.length))];
}

export { fox, customfox };