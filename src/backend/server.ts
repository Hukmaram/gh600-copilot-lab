/**
 * Backend server module for the lab application.
 */

import { formatMessage } from '../shared/utils';

/**
 * Represents a simple API response.
 */
export interface ApiResponse {
  success: boolean;
  message: string;
  timestamp: string;
}

/**
 * Handles a simple request and returns an API response.
 * @param requestMessage - The incoming request message
 * @returns An API response object
 */
export function handleRequest(requestMessage: string): ApiResponse {
  const responseMessage = `Server received: ${requestMessage}`;
  return {
    success: true,
    message: formatMessage(responseMessage),
    timestamp: new Date().toISOString(),
  };
}

/**
 * Starts the backend server.
 */
export function startServer(): void {
  console.log(formatMessage('Backend server started'));
}
