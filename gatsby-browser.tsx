const React = require('react');
const { MainLayout } = require('./src/components/layout/index');
require('./node_modules/@dathaplus/storybook/dist/styles/style.min.css');
require('./node_modules/@dathaplus/storybook/dist/styles/fonts.min.css');

exports.wrapPageElement = ({ element, props }) => {
  return <MainLayout {...props}>{element}</MainLayout>;
};
