/* @flow */

import * as React from 'react';
import Portal from './Portal';
import { ThemeProvider, withTheme } from '../../core/theming';
import type { Theme } from '../../types';

type Props = {
  children: React.Node,
  theme: Theme,
};

/**
 * Themed portal is a special portal which preserves the theme in the context.
 */
class ThemedPortal extends React.Component<Props> {
  render() {
    return (
      <Portal {...this.props}>
        <ThemeProvider theme={this.props.theme}>
          {this.props.children}
        </ThemeProvider>
      </Portal>
    );
  }
}

export default withTheme(ThemedPortal);
