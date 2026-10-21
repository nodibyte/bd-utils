import assert from 'node:assert/strict'
import { toAsciiDigits, normalizeMobile, isMobile, toE164, operator } from './index.js'

assert.equal(toAsciiDigits('৳১,২৩৪.৫০'), '৳1,234.50')
assert.equal(toAsciiDigits(42), '42')

for (const ok of ['01712345678', '+8801712345678', '8801712345678', '017-1234-5678', '০১৭১২৩৪৫৬৭৮', '+৮৮ ০১৭১২ ৩৪৫৬৭৮'])
  assert.equal(normalizeMobile(ok), '01712345678', ok)
for (const bad of ['', '0171234567', '017123456789', '01212345678', '1712345678', '+1 01712345678', 'abc'])
  assert.equal(normalizeMobile(bad), null, bad)

assert.equal(isMobile('01912345678'), true)
assert.equal(isMobile('01112345678'), false)
assert.equal(toE164('01812345678'), '+8801812345678')
assert.equal(toE164('nope'), null)
assert.equal(operator('01312345678'), 'Grameenphone')
assert.equal(operator('01412345678'), 'Banglalink')
assert.equal(operator('01512345678'), 'Teletalk')
assert.equal(operator('01612345678'), 'Robi')
assert.equal(operator('০১৮১২৩৪৫৬৭৮'), 'Robi')
assert.equal(operator('bad'), null)

console.log('bd-utils ok')
