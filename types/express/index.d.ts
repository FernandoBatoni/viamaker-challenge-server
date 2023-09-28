/* Overriding String namespace */
interface String {
  /** Return true if includes all given words (AND) */
  includesOne: (...lowerCaseWords: Array<string>) => boolean

  /** Return true if includes one of given words (OR) */
  includesAll: (...lowerCaseWords: Array<string>) => boolean

  /** Return true if string is exactly the same (case insensitive)  */
  equals: (word: string) => boolean

  /** Return true if string exactly match one of the array (case insensitive) */
  isIn: (arrayOfWords: Array<string>) => boolean
}
