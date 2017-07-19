// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Anchor extends React.Component {
  static displayName = 'Menu.Anchor'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-menu-anchor', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default Anchor