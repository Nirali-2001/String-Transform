document.getElementById('inputString').addEventListener('input', function() {
    const inputString = this.value;

    document.getElementById('lowerCase').textContent = inputString.toLowerCase();
    document.getElementById('upperCase').textContent = inputString.toUpperCase();
    document.getElementById('camelCase').textContent = toCamelCase(inputString);
    document.getElementById('pascalCase').textContent = toPascalCase(inputString);
    document.getElementById('snakeCase').textContent = toSnakeCase(inputString);
    document.getElementById('kebabCase').textContent = toKebabCase(inputString);
    document.getElementById('trim').textContent = inputString.replace(/\s+/g, '');
});

// Helper functions for case transformation
function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        return index == 0 ? match.toLowerCase() : match.toUpperCase();
    }).replace(/\s+/g, '');
}

function toPascalCase(str) {
    return str.replace(/\w+/g, function(match) {
        return match.charAt(0).toUpperCase() + match.substr(1).toLowerCase();
    }).replace(/\s+/g, '');
}

function toSnakeCase(str) {
    return str.replace(/\s+/g, '_').toLowerCase();
}

function toKebabCase(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
}
