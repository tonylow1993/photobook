/**
 * Test to check if the component renders correctly
 */
/* global it expect */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import LaunchView from '@containers/Launch/LaunchView';

// Login prop expects a promise
const mockPromise = new Promise((resolve) => {
  resolve();
});

it('LaunchView renders correctly', () => {
  const tree = renderer.create(
    <LaunchView
      login={() => mockPromise}
      getTemplates={() => mockPromise}
      getTabs={() => mockPromise}
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
