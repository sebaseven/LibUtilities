import { obscureEmail } from '../obscureEmail';
describe('obscureEmail', () => {

    // obscures part of the username correctly for standard email addresses
    it('should obscure part of the username when given a standard email address', () => {
      const email = 'user@example.com';
      const result = obscureEmail(email);
      expect(result).toBe('use******@example.com');
    });

    // handles empty email string gracefully
    it('should return an empty string when given an empty email string', () => {
      const email = '';
      const result = obscureEmail(email);
      expect(result).toBe('');
    });

    // preserves the domain part of the email address
    it('should preserve domain part of email address', () => {
      const email = 'user@example.com';
      const result = obscureEmail(email);
      expect(result).toContain('@example.com');
    });

    // handles usernames with exactly three characters correctly
    it('should handle usernames with exactly three characters', () => {
      const email = 'abc@example.com';
      const result = obscureEmail(email);
      expect(result).toBe('abc******@example.com');
    });

    // handles usernames longer than three characters correctly
    it('should handle usernames longer than three characters', () => {
      const email = 'username123@example.com';
      const result = obscureEmail(email);
      expect(result).toBe('use******@example.com');
    });

    // handles email addresses without '@' symbol
    it('should return the original email when no "@" symbol is present', () => {
      const email = 'userexample.com';
      const result = obscureEmail(email);
      expect(result).toBe('userexample.com');
    });
});
