/**
 * Shared utility module for the lab application.
 */

/**
 * Formats a message with a timestamp prefix.
 * @param message - The message to format
 * @returns Formatted message with timestamp
 */
export function formatMessage(message: string): string {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] ${message}`;
}
