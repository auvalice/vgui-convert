import { keyvaluesJson, keyvaluesVguiSanitizedWithLineBreaks } from '@/fixtures'
import JsonToVguiConverter from './jsonToVguiConverter'

describe('JsonToVguiConverter', () => {
  const input = keyvaluesJson
  const expected = keyvaluesVguiSanitizedWithLineBreaks

  let jsonToVguiConverter: JsonToVguiConverter

  beforeEach(() => {
    jsonToVguiConverter = new JsonToVguiConverter()
  })

  describe('convert', () => {
    it('should convert a JSON object to a VGUI string with linebreaks', async () => {
      const result = await jsonToVguiConverter.convert(input)

      expect(result).toEqual(expected)
    })
  })
})
