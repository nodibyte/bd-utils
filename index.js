const BN_ZERO = 0x09e6

export function toAsciiDigits(text) {
  return String(text).replace(/[০-৯]/g, (d) => String(d.charCodeAt(0) - BN_ZERO))
}

export function normalizeMobile(input) {
  const digits = toAsciiDigits(input).replace(/[\s\-().]/g, '').replace(/^(?:\+?88)/, '')
  return /^01[3-9]\d{8}$/.test(digits) ? digits : null
}

export function isMobile(input) {
  return normalizeMobile(input) !== null
}

export function toE164(input) {
  const n = normalizeMobile(input)
  return n && `+88${n}`
}

const OPERATORS = { 3: 'Grameenphone', 7: 'Grameenphone', 4: 'Banglalink', 9: 'Banglalink', 5: 'Teletalk', 6: 'Robi', 8: 'Robi' }

// Prefix only: numbers ported between operators keep their old prefix.
export function operator(input) {
  const n = normalizeMobile(input)
  return n && OPERATORS[n[2]]
}
