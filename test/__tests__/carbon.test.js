import Carbon from "../../src/index";

describe('Test Carbon', () => {
  describe('Constructor and Static Methods', () => {
    test('should create instance with current date when no parameter', () => {
      const carbon = Carbon.now();
      expect(carbon.toDate()).toBeInstanceOf(Date);
    });

    test('should create instance with specific date', () => {
      const date = '2024-01-01';
      const carbon = new Carbon(date);
      expect(carbon.format('Y-m-d')).toBe('2024-01-01');
    });

    test('static now() should return current date', () => {
      const carbon = Carbon.now();
      expect(carbon).toBeInstanceOf(Carbon);
    });

    test('static parse() should parse date string', () => {
      const carbon = Carbon.parse('2024-01-01');
      expect(carbon.format('Y-m-d')).toBe('2024-01-01');
    });
  });

  describe('Date Formatting', () => {
    test('should format date correctly', () => {
      const carbon = new Carbon('2024-01-01 15:30:45');
      expect(carbon.format('Y-m-d H:i:s')).toBe('2024-01-01 15:30:45');
    });
  });

  describe('Date Manipulation', () => {
    test('should add days correctly', () => {
      const carbon = new Carbon('2024-01-01');
      const newDate = carbon.addDays(5);
      expect(newDate.format('Y-m-d')).toBe('2024-01-06');
    });

    test('should subtract days correctly', () => {
      const carbon = new Carbon('2024-01-06');
      const newDate = carbon.subDays(5);
      expect(newDate.format('Y-m-d')).toBe('2024-01-01');
    });

    test('should add months correctly', () => {
      const carbon = new Carbon('2024-01-01');
      const newDate = carbon.addMonths(2);
      expect(newDate.format('Y-m-d')).toBe('2024-03-01');
    });

    test('should subtract months correctly', () => {
      const carbon = new Carbon('2024-03-01');
      const newDate = carbon.subMonths(2);
      expect(newDate.format('Y-m-d')).toBe('2024-01-01');
    });
  });

  describe('Date Comparison', () => {
    test('should compare same day correctly', () => {
      const date1 = new Carbon('2024-01-01');
      const date2 = new Carbon('2024-01-01');
      expect(date1.isSameDay(date2)).toBe(true);
    });

    test('should compare after date correctly', () => {
      const date1 = new Carbon('2024-01-02');
      const date2 = new Carbon('2024-01-01');
      expect(date1.isAfter(date2)).toBe(true);
    });

    test('should compare before date correctly', () => {
      const date1 = new Carbon('2024-01-01');
      const date2 = new Carbon('2024-01-02');
      expect(date1.isBefore(date2)).toBe(true);
    });
  });

  describe('Conversion Methods', () => {
    test('should convert to Date object', () => {
      const carbon = new Carbon('2024-01-01');
      expect(carbon.toDate()).toBeInstanceOf(Date);
    });

    test('should convert to string', () => {
      const carbon = new Carbon('2024-01-01');
      expect(typeof carbon.toString()).toBe('string');
    });
  });
});