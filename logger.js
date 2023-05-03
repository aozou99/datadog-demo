const { createLogger, format, transports } = require('winston');
const logger = createLogger({
    level: 'info',
    exitOnError: false,
    format: format.combine(
      format.timestamp(),
      format.json(),
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: `/Users/aoki.atsushi/Develop/datadog-demo/demo.log` }),
    ],
});

exports.logger = logger;
