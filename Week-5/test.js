const all=require('./index3')


test('2 + 3 = 5', () => {
    expect(all.sum(2, 3)).toBe(5);
  });

test('3 * 4 = 12', () => {
    expect(all.product(3, 4)).toBe(12);
});
  
test('5 - 6 = -1', () => {
    expect(all.diff(5, 6)).toBe(-1);
});