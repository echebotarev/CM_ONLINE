import favicon from 'serve-favicon';
import path from 'path';

module.exports = favicon(path.join(__dirname, '..', '..', 'public', 'favicon.ico'));
