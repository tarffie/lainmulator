/**
 * Function that receives a name and logs a greeting to the console
 * @param {string} name - The name to greet
 * @returns {void} Nothing is returned
 * @example
 * say_hi("John");
 * // Outputs: "hello, there John!"
 */
export function say_hi(name: string): void {
  console.log(`hello, there ${name}!`);
}
