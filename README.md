# @nodibyte/bd-utils

Bangladeshi mobile number validation and Bangla digit parsing. Zero dependencies, ~30 lines.

Users on Bangla keyboards type `০১৭১২৩৪৫৬৭৮`. Most BD phone regexes reject that. This doesn't.

```bash
npm install @nodibyte/bd-utils
```

```js
import { normalizeMobile, isMobile, toE164, operator, toAsciiDigits } from '@nodibyte/bd-utils'

normalizeMobile('+880 1712-345678')  // '01712345678'
normalizeMobile('০১৭১২৩৪৫৬৭৮')       // '01712345678'
normalizeMobile('01212345678')       // null
isMobile('01912345678')              // true
toE164('01812345678')                // '+8801812345678'
operator('01612345678')              // 'Robi'
toAsciiDigits('৳১,২৩৪')              // '৳1,234'
```

| Function | Returns |
|---|---|
| `normalizeMobile(s)` | `01XXXXXXXXX`, or `null` if not a valid BD mobile. Accepts `+88`/`88` prefix, spaces, dashes, dots, brackets, Bangla digits. |
| `isMobile(s)` | `boolean` |
| `toE164(s)` | `+8801XXXXXXXXX` or `null` (for SMS gateways, WhatsApp links) |
| `operator(s)` | `'Grameenphone'` (013, 017), `'Banglalink'` (014, 019), `'Teletalk'` (015), `'Robi'` (016, 018), or `null`. By prefix, so a ported number shows its original operator. |
| `toAsciiDigits(s)` | Same string with ০–৯ replaced by 0–9. Run before `Number()` or `parseFloat()` on user input. |

## Formatting? Use the platform

Showing numbers in Bangla or with lakh/crore grouping needs no library:

```js
(1234567).toLocaleString('bn-BD')  // '১২,৩৪,৫৬৭'
(1234567).toLocaleString('en-IN')  // '12,34,567'
```

## License

MIT © [Nodibyte](https://www.nodibyte.com). Used in Nodibyte's store, pharmacy and restaurant software.

## Releasing

Bump `version` in `package.json`, push a `v<version>` tag. GitHub Actions publishes to npm with provenance via [trusted publishing](https://docs.npmjs.com/trusted-publishers); no npm token is stored.
