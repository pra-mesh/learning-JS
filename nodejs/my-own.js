const generateDescription = (text) => text.slice(0, 10).concat(" ", "...");
const generateTitle = (text) => text.slice(0, 10).concat(" ", "...");
module.exports = { generateDescription, generateTitle };