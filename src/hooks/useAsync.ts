/**
 * @callback run
 * @param {Promise} promise - function which return a promise
 */
/**
 * Describing the return state object
 * @typedef {Object} AsyncState - an object containing state of the async operation
 * @property {(idle|pending|resolved|rejected)} status - status of the async operation
 * @property {any} data - resolved data
 * @property {Error} error - rejected error
 * @property {run} run - runner function which takes in a function
 * which return a promise
 */
/**
 * we want to build a common, reusable, type safe hook
 * which handles all the async code in our app
 *
 * the hook will be in
 * - `idle` state when there is no promise to process
 * - `pending` state when a promise is being processed
 * - `resolved` state when the promise is resolved
 * - `rejected` state when the promise is rejected
 *
 * the hook will also return a `data`, if the promise is resolved, else
 * it'll return `error` which contains the error information
 *
 * the hook should also be type safe and should allow for proper
 * type defanitions for data and as well for the Error
 *
 * the api we're looking for is
 *
 * // test.tsx
 * const {run, status} = useAsync()
 *
 * React.useEffect(() => {
 *  run(fetch('/api'))
 * }, [])
 *
 *
 * @param {Object} initialState - initial state of the hook
 * @param {string} initialState.status - initial status
 * @param {any} initialState.data - initial data
 * @param {Error} initialState.error - initial error
 *
 * @return {AsyncState} state - the state of the async operation
 */
const useAsync = () => {
  return null
}

export default useAsync
