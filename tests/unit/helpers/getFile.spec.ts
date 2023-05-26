import { getFile } from '@/helpers';

describe('getFile', () => {
    it('Returns the correct file for boundary square indices', () => {
        expect(getFile(0)).toBe('a');
        expect(getFile(7)).toBe('h');
        expect(getFile(8)).toBe('a');
        expect(getFile(15)).toBe('h');
        expect(getFile(16)).toBe('a');
        expect(getFile(23)).toBe('h');
        expect(getFile(24)).toBe('a');
        expect(getFile(31)).toBe('h');
        expect(getFile(32)).toBe('a');
        expect(getFile(39)).toBe('h');
        expect(getFile(40)).toBe('a');
        expect(getFile(47)).toBe('h');
        expect(getFile(48)).toBe('a');
        expect(getFile(55)).toBe('h');
        expect(getFile(56)).toBe('a');
        expect(getFile(63)).toBe('h');
    });

    it('Does not throw an error for invalid indices', () => {
        expect(() => getFile(-1)).not.toThrow();
        expect(() => getFile(64)).not.toThrow();
    });
});
