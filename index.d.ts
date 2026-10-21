export type Operator = 'Grameenphone' | 'Banglalink' | 'Teletalk' | 'Robi'
export function toAsciiDigits(text: string | number): string
export function normalizeMobile(input: string): string | null
export function isMobile(input: string): boolean
export function toE164(input: string): string | null
export function operator(input: string): Operator | null
