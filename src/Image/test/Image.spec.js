import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Image from '../Image';
import { imagePrivateDriverFactory } from './Image.private.uni.driver';

describe('Image', () => {
  const render = createRendererWithUniDriver(imagePrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Image />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<Image />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<Image buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
