export type Registers = {
  // 2^⁰ - 2⁸ (0-255)
  B: number;
  C: number;
  D: number;
  E: number;
  H: number;
  L: number;
  I: number;
  R: number;
  M: number;
  IME: number;
  A: number; // accumulator
  F: number; // flags
  // 2^⁰ - 2^¹⁶
  SP: number;
  PC: number;
};
