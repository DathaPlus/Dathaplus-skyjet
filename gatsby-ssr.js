/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

const React = require('react');
const { MainLayout } = require('./src/components/layout/index');
require('./node_modules/@dathaplus/storybook/dist/styles/style.min.css');
require('./node_modules/@dathaplus/storybook/dist/styles/fonts.min.css');
const { ServerStyleSheet, StyleSheetManager } = require('styled-components');
const path = require('path');
const moduleAlias = require('module-alias');

moduleAlias.addAlias(
  'styled-components',
  path.join(__dirname, '../node_modules/styled-components'),
);

const sheet = new ServerStyleSheet();

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([sheet.getStyleElement()]);
};

exports.wrapRootElement = ({ element }) => {
  return (
    <StyleSheetManager sheet={sheet.instance}>
      <MainLayout>{element}</MainLayout>
    </StyleSheetManager>
  );
};
