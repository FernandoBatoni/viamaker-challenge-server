import dayjs from 'dayjs-with-plugins'

import _variables from './_variables'

const {
  ENV, IP, PORT, DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD,
  DATABASE_CUSTERNAME
} = _variables

const isProduction = String(ENV).toLowerCase().includes('production')

const isDevelopment = String(ENV).toLowerCase().includes('development')

const isLocal = !isProduction && !isDevelopment

function UTCDate (date: dayjs.ConfigType = new Date()): Date {
  const auxDayjsDate = dayjs(date).tz('America/Sao_Paulo')

  return new Date(
    Date.UTC(
      auxDayjsDate.year(),
      auxDayjsDate.month(),
      auxDayjsDate.date(),
      auxDayjsDate.hour(),
      auxDayjsDate.minute(),
      auxDayjsDate.second(),
      auxDayjsDate.millisecond()
    )
  )
}

const time = function (date: dayjs.ConfigType = new Date(), format?: dayjs.OptionType, locale?: string, strict?: boolean): dayjs.Dayjs {
  const time = dayjs(date, format, locale, strict).subtract(3, 'hours')

  delete time.toDate

  time.toDate = () => UTCDate(date)

  return time
}

const timestamps = {
  createdAt: { type: Date, default: undefined },
  updatedAt: { type: Date, set: Date, default: undefined }
}

const timeStartOf = (date: dayjs.ConfigType, unit: dayjs.OpUnitType): dayjs.Dayjs => {
  return dayjs.tz(date, 'UTC').startOf(unit)
}

const timeEndOf = (date: dayjs.ConfigType, unit: dayjs.OpUnitType): dayjs.Dayjs => {
  return dayjs.tz(date, 'UTC').endOf(unit)
}

export {
  DATABASE_CUSTERNAME, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USERNAME, ENV, IP, isDevelopment, isLocal, isProduction, PORT, time, timeEndOf, timestamps, timeStartOf
}
