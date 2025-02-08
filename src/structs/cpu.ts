import { Registers } from "@/types/registers";
import { Clock } from "@/types/clock";

export class Cpu {
  clock: Clock = {
    m: 0, // phi 1
    t: 0, // phi 2
  };

  registers: Registers = {
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    H: 0,
    L: 0,
    I: 0,
    R: 0,
    M: 0,
    IME: 0,
    A: 0,
    F: 0,
    SP: 0,
    PC: 0,
  };

  ADD_AE() {
    this.registers.A += this.registers.E;
    this.registers.F = 0;

    if (!(this.registers.A & 255)) this.registers.F |= 0x80;
    if (this.registers.A > 255) this.registers.F |= 0x10;
    this.registers.A &= 255;

    this.finishCycle(1, 4);
  }

  CP_AB() {
    let i = this.registers.A;
    i -= this.registers.B;

    this.registers.F |= 0x40;
    if (!(i & 255)) this.registers.F |= 0x80;
    if (i < 0) this.registers.F |= 0x10;

    this.finishCycle(1, 4);
  }

  private finishCycle(m: number, t: number) {
    this.clock.m = m;
    this.clock.t = t;
  }
}
