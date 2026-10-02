/**
 * Tests for the backend server module.
 */

import { handleRequest, startServer } from '../../src/backend/server';

describe('Backend Server', () => {
  describe('handleRequest', () => {
    it('should return a successful response', () => {
      const response = handleRequest('test message');
      expect(response.success).toBe(true);
    });

    it('should include the request message in the response', () => {
      const testMessage = 'Hello, backend!';
      const response = handleRequest(testMessage);
      expect(response.message).toContain(testMessage);
    });

    it('should include a timestamp in the response', () => {
      const response = handleRequest('test');
      expect(response.timestamp).toBeDefined();
      expect(typeof response.timestamp).toBe('string');
    });
  });

  describe('startServer', () => {
    it('should not throw an error', () => {
      expect(() => startServer()).not.toThrow();
    });
  });
});
