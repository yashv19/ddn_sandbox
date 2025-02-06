
/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications). Returns upper case
 */
export function get_uppercase(name?: string) {
  return `${name?.toUpperCase()}`
}


/**
 * This is exposed as a command. Returns lower case
 */
export function get_lowercase(name?: string) {
  return `${name?.toLowerCase()}`
}
