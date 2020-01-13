import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const imageDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get the current count */
    getCountText: async () =>
      base.$(`[data-hook="${dataHooks.imageCount}"]`).text(),

    /** Click the button */
    clickButton: async () =>
      base.$(`[data-hook="${dataHooks.imageButton}"]`).click(),

    /** Get the button's text */
    getButtonText: async () =>
      base.$(`[data-hook="${dataHooks.imageButton}"]`).text(),
  };
};
