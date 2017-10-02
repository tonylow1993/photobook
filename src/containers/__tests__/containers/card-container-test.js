/**
 * Test to check if the container is created correctly
 */
/* global it expect */
import 'react-native';

import CardContainer from '@containers/photobook/Card/CardContainer';

// Check if CardContainer is created correctly
it('CardContainer is created correctly', () => {
  expect(typeof CardContainer).toEqual('function');
});
