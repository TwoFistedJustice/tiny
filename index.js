module.exports = function tiny(string) {
  if (typeof string !== 'string') {
    throw new Error('tiny wants, no... NEEDS a string!');
  }
  return string.replace(/\s/g, "");
};