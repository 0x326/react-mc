// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../../types'

class ToolbarSpacer extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'Drawer.Persistent.ToolbarSpacer'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-persistent-drawer__toolbar-spacer', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default ToolbarSpacer