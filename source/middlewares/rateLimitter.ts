import limitter from 'express-rate-limit'

const denial = {}

function fib (n) {
  if (n <= 1) return 1
  return fib(n - 1) + fib(n - 2)
}

const rateLimitter = limitter({
  windowMs: 2000,
  max: 10,
  handler: async (req, res, next) => {
    const host = denial[`${req.headers.origin}${req.originalUrl}`]
    const newEntry = new Date()

    if (!host) {
      denial[`${req.headers.origin}${req.originalUrl}`] = { expiry: 1, fibCount: 1, entry: new Date() }
    } else if ((newEntry.getTime() - host?.entry.getTime()) / 1000 >= host.expiry + 2) {
      delete denial[`${req.headers.origin}${req.originalUrl}`]

      next(); return
    } else {
      host.expiry = fib(host.fibCount++)
      host.entry = newEntry
    }

    await new Promise(resolve => {
      setTimeout(() => {
        resolve(next())
      }, denial[`${req.headers.origin}${req.originalUrl}`].expiry * 1000)
    })
  }
})

export default rateLimitter
