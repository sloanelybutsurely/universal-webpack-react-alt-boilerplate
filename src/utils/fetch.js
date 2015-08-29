export default function fetch(store, source) {
  const storeInst = store.getInstance ? store.getInstance() : store
  const state = storeInst.getState()

  const validHandlers = ['success', 'failure', 'begin', 'end']
  validHandlers.forEach((handler) => {
    if (source[handler] && !source[handler].id) {
      throw new Error(`${handler} handler must be an action function`)
    }
  })

  const value = source.local && source.local(state)
  const shouldFetch = source.shouldFetch
    ? source.shouldFetch(state)
    : value == null

  if (shouldFetch) {
    if (source.begin) source.begin()
    const result = source.remote(state)
    result.then(source.success, source.failure).then(source.end)
    return result
  } else {
    return Promise.resolve(value)
  }
}
