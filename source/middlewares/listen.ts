import colors from 'colors/safe'

import { ENV, PORT } from '../config/globals'

const runningEnvironmentText =
  ENV === 'production'
    ? colors.red(ENV)
    : colors.blue(ENV)

export default () => {
  console.info(
    colors.magenta(
      `[SERVER] Listening on port ${colors.rainbow(
        PORT
      )} (${runningEnvironmentText})`
    )
  )
}
