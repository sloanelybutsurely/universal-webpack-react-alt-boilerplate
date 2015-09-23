// adapted from https://gist.github.com/goatslacker/b3ea014881aa5b03488d
export default function fetch(store, source, ...args) {
  const storeInst = store.getInstance ? store.getInstance() : store
  const state = storeInst.getState()

  const validHandlers = ['success', 'failure', 'begin', 'end']
  validHandlers.forEach((handler) => {
    if (source[handler] && !source[handler].id) {
      throw new Error(`${handler} handler must be an action function`)
    }
  })

  const value = source.local && source.local(state, ...args)
  const shouldFetch = source.shouldFetch
    ? source.shouldFetch(state)
    : value == null

  if (shouldFetch) {
    if (source.begin) source.begin()
    const result = source.remote(state, ...args)
    result.then(source.success, source.failure).then(source.end)
    return result
  } else {
    return Promise.resolve(value)
  }
}
