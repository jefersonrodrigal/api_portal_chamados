import winston from 'winston'

const { combine, printf, label, timestamp } = winston.format

const Format = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

export const logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.File({
      filename: 'api-log.log',
      dirname: './src/logs',
    }),
  ],
  format: combine(label({ label: 'api' }), timestamp(), Format),
})
