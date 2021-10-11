/**
 * defanition of the change handler callback
 * @callback changeHandler
 * @param {React.ChangeEvent} event - keyboard change event
 */
/**
 * defanition of the return type
 * @typedef {Object} TypeaheadState
 * @property {string} value - input value
 * @property {changeHandler} changeHandler - change handler
 */
/**
 * this hook will manage the state of the type-ahead input field
 *
 * it'll not take any input
 *
 * this hook will return the value of the input and a handler function which
 * handles the change event of the type-ahead input
 *
 * this hook will also handle a very important optimisation that is required
 * for our type-ahead component
 *
 * with our current setup we call our server (expensive, blocking calls)
 * for every keystroke, can we do better here and reduce the calls and be
 * smart about it at the same time?
 *
 * @return {TypeaheadState} state - required state to handle the type-ahead input
 */
const useDebouncedSearch = () => {
  return null
}

export default useDebouncedSearch
