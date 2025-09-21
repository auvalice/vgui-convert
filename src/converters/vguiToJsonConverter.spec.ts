import { keyvaluesJson, keyvaluesVguiSanitized, keyvaluesVguiUnsanitized } from '@/fixtures'
import VguiToJsonConverter from './vguiToJsonConverter'

describe('VguiToJsonConverter', () => {
  const input = keyvaluesVguiUnsanitized
  const expected = keyvaluesJson

  let vguiToJsonConverter: VguiToJsonConverter

  beforeEach(() => {
    vguiToJsonConverter = new VguiToJsonConverter()
  })

  describe('convert', () => {
    it('should not throw an error when converting a valid VGUI KeyValue string', async () => {
      await vguiToJsonConverter.convert(input)
    })

    it('should correctly convert an example VGUI string to an object', async () => {
      const result = await vguiToJsonConverter.convert(input)

      expect(result).toEqual(expected)
    })
  })

  describe('sanitizeInputString', () => {
    it('should remove comments and excessive whitespace from the input string', async () => {
      // @ts-expect-error Testing private method
      const result = await vguiToJsonConverter.sanitizeInputString(input)

      expect(result).toEqual(keyvaluesVguiSanitized)
    })
  })
})
