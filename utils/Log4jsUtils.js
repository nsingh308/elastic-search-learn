const log4js = require('log4js');
var jsonConfig = require('../config/log4js');
log4js.configure(jsonConfig);

module.exports = log4js;
/** Usage
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
 */