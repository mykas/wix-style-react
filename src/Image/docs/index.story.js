import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import Box from '../../Box';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import Image from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'Image',

  component: Image,
  componentPath: '..',

  componentProps: {
    source:
      'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg',
    fit: 'cover',
    position: 'center',
    lazy: false,
  },

  exampleProps: {
    position: [
      'center',
      'top',
      'top left',
      'top right',
      'right',
      'bottom',
      'bottom left',
      'bottom right',
      'left',
    ],
  },

  componentWrapper: ({ component }) => <Box align="center">{component}</Box>,

  sections: [
    header({
      component: <Image width="150" height="100" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
            }),
          ]),

          importExample("import Image from 'wix-style-react/Image';"),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Simple Usage',
              text: 'A simple example with compact preview',
            }),

            code({
              compact: true,
              source:
                '<Image lazy width="100%" fit="cover" source="https://interactive-examples.mdn.mozilla.net/media/examples/moon.jpg" />',
            }),
          ]),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
