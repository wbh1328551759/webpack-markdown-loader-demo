const marked = require('marked')

function transform (source) {
  const html = marked(source)
  return `export default ${JSON.stringify(html)}`;
}

module.exports = transform
