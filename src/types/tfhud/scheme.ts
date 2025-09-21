import type SchemeBaseSettings from './schemeBaseSettings'
import type SchemeColor from './schemeColor'
import type SchemeFont from './schemeFont'

export default interface Scheme {
  colors: Record<string, SchemeColor> // rgba, not seeing any deviations here
  baseSettings: SchemeBaseSettings
  fonts: Record<string, SchemeFont>
}
