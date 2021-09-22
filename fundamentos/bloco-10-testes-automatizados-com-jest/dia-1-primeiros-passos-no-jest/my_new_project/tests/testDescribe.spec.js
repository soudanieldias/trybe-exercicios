const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

describe('Testa Sunday week day', () => {
    test('Sunday is a week day', () => {
        expect(weekDays).toContain('Sunday');
      });
});

describe('Testa Sunday not a workday', () => {
    test('Sunday is not a workday', () => {
        expect(workDays).not.toContain('Sunday');
      });
});