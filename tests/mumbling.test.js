import accum from '../mumbling'


describe('Mumbling', () => {
  test('accum("abcd") -> "A-Bb-Ccc-Dddd"', () => {
    expect(accum('abcd')).eql('A-Bb-Ccc-Dddd');
  });
  test('accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"', () => {
    expect(accum('RqaEzty').toEql('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'))
  });
  test('accum("cwAt") -> "C-Ww-Aaa-Tttt"', () => {
    expect(accum('cwAt')).toEql('C-Ww-Aaa-Tttt')
  });
})
