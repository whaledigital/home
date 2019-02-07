import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Box3D from './Box3D';

storiesOf('Box3D', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Box3D>Box3D</Box3D>;
  });
