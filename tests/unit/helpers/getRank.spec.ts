import { getRank } from '@/helpers';

describe('getRank', () => {
    it('Returns the correct rank for boundary square indices', () => {
        expect(getRank(0)).toBe(8);
        expect(getRank(7)).toBe(8);
        expect(getRank(8)).toBe(7);
        expect(getRank(15)).toBe(7);
        expect(getRank(16)).toBe(6);
        expect(getRank(23)).toBe(6);
        expect(getRank(24)).toBe(5);
        expect(getRank(31)).toBe(5);
        expect(getRank(32)).toBe(4);
        expect(getRank(39)).toBe(4);
        expect(getRank(40)).toBe(3);
        expect(getRank(47)).toBe(3);
        expect(getRank(48)).toBe(2);
        expect(getRank(55)).toBe(2);
        expect(getRank(56)).toBe(1);
        expect(getRank(63)).toBe(1);
    });

    it('Does not throw an error for invalid indices', () => {
        expect(() => getRank(-1)).not.toThrow();
        expect(() => getRank(64)).not.toThrow();
    });
});
