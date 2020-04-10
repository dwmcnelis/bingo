import * as pino from 'pino'

const logger = pino(
  {
    level: 'trace',
    prettyPrint: {
      colorize: true,
      // colorize: chalk.supportsColor, // --colorize
      // crlf: false, // --crlf
      // errorLikeObjectKeys: ['err', 'error'], // --errorLikeObjectKeys
      // errorProps: '', // --errorProps
      levelFirst: true, // --levelFirst
      // messageKey: 'msg', // --messageKey
      // timestampKey: 'time', // --timestampKey
      translateTime: true, // --translateTime
      // search: 'foo == `bar`', // --search
      ignore: 'pid,hostname' // --ignore
    }
  } /*, 'log.json' */
)

export default logger
