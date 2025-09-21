interface RecursiveRecord { [key: string]: any | RecursiveRecord }

export default class JsonToVguiConverter {
  async convert(input: RecursiveRecord): Promise<string> {
    const result = this.recursivelyParseObject(input)
    return result
  }

  private recursivelyParseObject(input: RecursiveRecord, partialString = ''): string {
    let result = partialString

    Object.entries(input).forEach(([key, value]) => {
      if (key.includes('.'))
        result += key.toString()
      else
        result += `"${key.toString()}"`

      if (typeof value === 'object' && value !== null) {
        result += `\n{\n`
        result = `${this.recursivelyParseObject(value, result)}`
        result += `}\n`
        return result
      }

      result += ` "${value}"\n`
    })

    return result
  }
}
