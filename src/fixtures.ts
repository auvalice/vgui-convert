/* v8 ignore start */
// Contains fixtures for tests, so is not necessary to cover

// Need this to handle the same cases as may occur in test files
/* eslint-disable style/no-tabs */

export const keyvaluesVguiUnsanitized = `
"string"          "string"
"false"           "false"
"true"            "true"
"number"          "1234"
"float"				    "12.34"
"null"            "null"
"undefined"       "undefined"
NonString.Value   "SomeOther.String"


"nested"
{

    "string"      "string"
// comment
      // another comment
    "deep"
    {
        "string"  "string" // Comment on same line
    }
    "deep2"
    {
        "string"  "string" // Comment on same line
    }
}

`

export const keyvaluesVguiSanitized = `"string" "string" "false" "false" "true" "true" "number" "1234" "float" "12.34" "null" "null" "undefined" "undefined" NonString.Value "SomeOther.String" "nested" { "string" "string" "deep" { "string" "string" } "deep2" { "string" "string" } }`

export const keyvaluesVguiSanitizedWithLineBreaks = `"string" "string"
"false" "false"
"true" "true"
"number" "1234"
"float" "12.34"
"null" "null"
"undefined" "undefined"
NonString.Value "SomeOther.String"
"nested"
{
"string" "string"
"deep"
{
"string" "string"
}
"deep2"
{
"string" "string"
}
}
`

export const keyvaluesJson = {
  'string': 'string',
  'false': false,
  'true': true,
  'number': 1234,
  'float': 12.34,
  'null': null,
  [`undefined`]: undefined,
  'NonString.Value': 'SomeOther.String',
  'nested': {
    string: 'string',
    deep: {
      string: 'string',
    },
    deep2: {
      string: 'string',
    },
  },
}
