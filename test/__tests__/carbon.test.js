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
      carbon.addDays(5);
      expect(carbon.format('Y-m-d')).toBe('2024-01-06');
    });

    test('should subtract days correctly', () => {
      const carbon = new Carbon('2024-01-06');
      carbon.subDays(5);
      expect(carbon.format('Y-m-d')).toBe('2024-01-01');
    });

    test('should add months correctly', () => {
      const carbon = new Carbon('2024-01-01');
      carbon.addMonths(2);
      expect(carbon.format('Y-m-d')).toBe('2024-03-01');
    });

    test('should subtract months correctly', () => {
      const carbon = new Carbon('2024-03-01');
      carbon.subMonths(2);
      expect(carbon.format('Y-m-d')).toBe('2024-01-01');
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

    test('should copy instance correctly', () => {
      const carbon = new Carbon('2024-01-01');
      const copy = carbon.copy();
      expect(copy).toBeInstanceOf(Carbon);
      expect(copy.format('Y-m-d')).toBe('2024-01-01');
      // Ensure it's a new instance
      copy.addDays(1);
      expect(carbon.format('Y-m-d')).toBe('2024-01-01');
      expect(copy.format('Y-m-d')).toBe('2024-01-02');
    });
  });

  describe('Year Manipulation', () => {
    test('should add years correctly', () => {
      const carbon = new Carbon('2024-01-01');
      carbon.addYears(2);
      expect(carbon.format('Y-m-d')).toBe('2026-01-01');
    });

    test('should subtract years correctly', () => {
      const carbon = new Carbon('2024-01-01');
      carbon.subYears(2);
      expect(carbon.format('Y-m-d')).toBe('2022-01-01');
    });
  });

  describe('Time Manipulation', () => {
    test('should add hours correctly', () => {
      const carbon = new Carbon('2024-01-01 12:00:00');
      carbon.addHours(5);
      expect(carbon.format('Y-m-d H:i:s')).toBe('2024-01-01 17:00:00');
    });

    test('should subtract hours correctly', () => {
      const carbon = new Carbon('2024-01-01 12:00:00');
      carbon.subHours(5);
      expect(carbon.format('Y-m-d H:i:s')).toBe('2024-01-01 07:00:00');
    });

    test('should add minutes correctly', () => {
      const carbon = new Carbon('2024-01-01 12:00:00');
      carbon.addMinutes(30);
      expect(carbon.format('Y-m-d H:i:s')).toBe('2024-01-01 12:30:00');
    });

    test('should subtract minutes correctly', () => {
      const carbon = new Carbon('2024-01-01 12:30:00');
      carbon.subMinutes(30);
      expect(carbon.format('Y-m-d H:i:s')).toBe('2024-01-01 12:00:00');
    });
  });

  describe('Date Getters', () => {
    test('should get year correctly', () => {
      const carbon = new Carbon('2024-05-15');
      expect(carbon.year()).toBe(2024);
    });

    test('should get month correctly', () => {
      const carbon = new Carbon('2024-05-15');
      expect(carbon.month()).toBe(5);
    });

    test('should get day correctly', () => {
      const carbon = new Carbon('2024-05-15');
      expect(carbon.day()).toBe(15);
    });
  });

  describe('Date Boundaries', () => {
    test('should get start of day correctly', () => {
      const carbon = new Carbon('2024-01-01 15:30:45');
      carbon.startOfDay();
      expect(carbon.format('Y-m-d H:i:s')).toBe('2024-01-01 00:00:00');
    });

    test('should get end of day correctly', () => {
      const carbon = new Carbon('2024-01-01 15:30:45');
      carbon.endOfDay();
      expect(carbon.format('Y-m-d H:i:s')).toBe('2024-01-01 23:59:59');
    });

    test('should get start of month correctly', () => {
      const carbon = new Carbon('2024-01-15');
      carbon.startOfMonth();
      expect(carbon.format('Y-m-d')).toBe('2024-01-01');
    });

    test('should get end of month correctly', () => {
      const carbon = new Carbon('2024-01-15');
      carbon.endOfMonth();
      expect(carbon.format('Y-m-d')).toBe('2024-01-31');
    });
  });

  describe('Static Factory Methods', () => {
    test('static today() should return today', () => {
      const carbon = Carbon.today();
      const today = new Date();
      expect(carbon.day()).toBe(today.getDate());
      expect(carbon.month()).toBe(today.getMonth() + 1);
      expect(carbon.year()).toBe(today.getFullYear());
    });

    test('static make() should create instance with current date when no parameter', () => {
      const carbon = Carbon.make();
      const now = new Date();
      expect(carbon.day()).toBe(now.getDate());
      expect(carbon.month()).toBe(now.getMonth() + 1);
      expect(carbon.year()).toBe(now.getFullYear());
    });

    test('static make() should create instance with specific date', () => {
      const carbon = Carbon.make('2024-05-15');
      expect(carbon.format('Y-m-d')).toBe('2024-05-15');
    });

    test('static createFromDate() should create correct date', () => {
      const carbon = Carbon.createFromDate(2024, 5, 15);
      expect(carbon.format('Y-m-d')).toBe('2024-05-15');
    });

    test('static createFromDateTime() should create correct date and time', () => {
      const carbon = Carbon.createFromDateTime(2024, 5, 15, 10, 30, 45);
      expect(carbon.format('Y-m-d H:i:s')).toBe('2024-05-15 10:30:45');
    });
  });
});
