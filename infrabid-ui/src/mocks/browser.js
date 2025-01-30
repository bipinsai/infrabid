// src/mocks/browser.js
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Setup the worker with the defined handlers
export const worker = setupWorker(...handlers);

// Start the worker (with proper fallback for unhandled requests)
worker.start({
  onUnhandledRequest: 'bypass',
});
