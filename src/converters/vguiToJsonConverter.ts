interface RecursiveRecord { [key: string]: any | RecursiveRecord }

export default class VguiToJsonConverter {
  async convert(input: string): Promise<RecursiveRecord> {
    const sanitized = await this.sanitizeInputString(input)
    const parsedAsStrings = this.parseToStrings(sanitized)

    return parsedAsStrings
  }

  private async sanitizeInputString(input: string): Promise<string> {
    const removeCommentsRegex = /(^\s*[\r\n])|(\s*\/\/.*)|(^\s*)/gm
    const stringWithoutComments = input.replace(removeCommentsRegex, '')
    const removeExcessiveWhitespaceRegex = /\s{2,}|\n/g
    const stringWithoutExcessiveWhitespace = stringWithoutComments.replace(removeExcessiveWhitespaceRegex, ' ')
    return stringWithoutExcessiveWhitespace.trim()
  }

  private async parseToStrings(input: string): Promise<RecursiveRecord> {
    const tokensRegex = /".*?"|[{}]|\w+\.?\w*/g
    const tokens = Array.from(input.matchAll(tokensRegex)).map(token => token[0])

    // console.log(tokens)

    const result = (await this.getObjectFromStringPairsArray(tokens))[0]
    return result
  }

  private async getObjectFromStringPairsArray(stringPairs: string[], startingIndex = 0): Promise<[stringRecord: RecursiveRecord, finalIndex: number]> {
    const resultingObject: RecursiveRecord = {}
    for (let i = startingIndex; i < stringPairs.length; i += 2) {
      const key = stringPairs[i].replace(/^"|"$/g, '')
      const value = stringPairs[i + 1]?.replace(/^"|"$/g, '')

      if (value === '{') {
        const [nestedObject, newIndex] = await this.getObjectFromStringPairsArray(stringPairs, i + 2)
        resultingObject[key] = nestedObject
        i = newIndex
        continue
      }

      if (key === '}') {
        // Iterator skips ahead 2, so we rewind to token right after closing bracket
        return [resultingObject, i - 1]
      }

      resultingObject[key] = this.parseValue(value)
    }
    return [resultingObject, Number.MAX_SAFE_INTEGER]
  }

  private parseValue(value: string): any {
    if (value === 'true')
      return true

    if (value === 'false')
      return false

    if (value === 'null')
      return null

    if (value === 'undefined')
      return undefined

    const asNumber = Number(value)
    if (!Number.isNaN(asNumber))
      return asNumber

    return value
  }
}
