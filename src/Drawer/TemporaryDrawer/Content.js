// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../../types'

class Content extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'Drawer.Temporary.Content'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-temporary-drawer__content', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Content
