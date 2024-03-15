type RandomBytes = (length: number) => Uint8Array;
export type Parts = Record<string, Uint8Array>;

export function split(randomBytes: RandomBytes, n: number, k: number, secret: Uint8Array): Parts;
export function join(parts: Parts): Uint8Array;
export function restorePart(parts: Parts, partIdx: number): Uint8Array;
