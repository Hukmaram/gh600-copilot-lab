/**
 * Frontend application module for the lab.
 */

import { formatMessage } from '../shared/utils';

/**
 * Represents a user interface component.
 */
export interface UIComponent {
  name: string;
  render(): string;
}

/**
 * A simple greeting component.
 */
export class GreetingComponent implements UIComponent {
  name = 'GreetingComponent';

  constructor(private userName: string) {}

  /**
   * Renders the greeting component.
   * @returns A formatted greeting message
   */
  render(): string {
    return formatMessage(`Hello, ${this.userName}!`);
  }
}

/**
 * Initializes the frontend application.
 */
export function initializeApp(): void {
  console.log(formatMessage('Frontend app initialized'));
}
