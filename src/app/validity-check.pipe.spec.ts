import { ValidityCheckPipe } from './validity-check.pipe';

describe('ValidityCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidityCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
