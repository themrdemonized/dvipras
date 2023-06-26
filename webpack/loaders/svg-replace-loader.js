module.exports = function(source) {
    var loader = this;

    loader.cacheable && loader.cacheable();

    return 'module.exports = "' + (source
        .replace(/(<svg.*)([\s\r\t\n]+width[\s\r\t\n]*="[^"]+")([^>]+>)/g, '$1$3')
        .replace(/(<svg.*)([\s\r\t\n]+height[\s\r\t\n]*="[^"]+")([^>]+>)/g, '$1$3')
        .replace(/[\s\r\t\n]+(stroke|fill)[\s\r\t\n]*="(black|#000)"/g, ' $1="currentColor"')
        .replace(/"/g, '\\"')
        .replace(/([\n\r])/g, '')) + '"';
}