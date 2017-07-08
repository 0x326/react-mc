// @flow
import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import { MDCDialogFoundation, util } from '@material/dialog'
import * as helper from '../helper'

type PropsT = {
  open: boolean,
  onClose: Function,
  onAccept: Function,
  onCancel: Function,
  className?: string,
  children: any,
}

class Dialog extends React.Component {
  props: PropsT
  static Backdrop: any
  static Body: any
  static Footer: any
  static Header: any
  static Surface: any

  static defaultProps = {
    onClose: () => {},
    onAccept: () => {},
    onCancel: () => {},
  }

  static childContextTypes = {
    surfaceProps: PropTypes.object,
  }

  getChildContext() {
    return { surfaceProps: this.state.surfaceProps }
  }

  state = {
    rootProps: { className: new Set() },
    surfaceProps: {},
  }

  // prettier-ignore
  foundation_ = new MDCDialogFoundation({
    addClass: helper.addClass('rootProps', this),
    removeClass: helper.removeClass('rootProps', this),
    addBodyClass: helper.addClass(document.body),
    removeBodyClass: helper.removeClass(document.body),
    eventTargetHasClass: helper.eventTargetHasClass(),
    registerInteractionHandler: helper.registerInteractionHandler('rootProps', this),
    deregisterInteractionHandler: helper.deregisterInteractionHandler('rootProps', this),
    registerSurfaceInteractionHandler: helper.registerInteractionHandler('surfaceProps', this),
    deregisterSurfaceInteractionHandler: helper.deregisterInteractionHandler('surfaceProps', this),
    registerDocumentKeydownHandler: helper.registerHandler(document, 'keydown'),
    deregisterDocumentKeydownHandler: helper.deregisterHandler(document, 'keydown'),
    registerTransitionEndHandler: helper.registerHandler('surfaceProps', this, 'transitionend'),
    deregisterTransitionEndHandler: helper.deregisterHandler('surfaceProps', this, 'transitionend'),
    notifyAccept: this.onAccept.bind(this),
    notifyCancel: this.onCancel.bind(this), 
    trapFocusOnSurface: () => this.focusTrap_ && this.focusTrap_.activate(),
    untrapFocusOnSurface: () => this.focusTrap_ && this.focusTrap_.deactivate(),
    isDialog: helper.isElement('.mdc-dialog__surface', this),
  })

  focusTrap_ = null
  focusTrap_ = null

  render() {
    const {
      className,
      open,
      onClose,
      onAccept,
      onCancel,
      children,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(
      'mdc-dialog',
      Array.from(rootProps.className),
      className
    )
    return (
      <div>
        <aside
          role="alertdialog"
          {...rootProps}
          className={rootClassName}
          {...rest}
        >
          {children}
        </aside>
      </div>
    )
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this)
    if (node instanceof HTMLElement) {
      this.focusTrap_ = util.createFocusTrapInstance(
        node.querySelector(MDCDialogFoundation.strings.DIALOG_SURFACE_SELECTOR),
        node.querySelector(MDCDialogFoundation.strings.ACCEPT_SELECTOR)
      )
    }

    this.foundation_.init()

    if (this.props.open) {
      this.foundation_.open()
    }
  }

  componentWillReceiveProps(nextProps: PropsT) {
    if (nextProps.open !== this.props.open) {
      if (nextProps.open) this.foundation_.open()
      // Don't call close_() here, for foundation_.close will be called twice
    }
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }

  onAccept() {
    this.props.onAccept()
    this.props.onClose()
  }

  onCancel() {
    this.props.onCancel()
    this.props.onClose()
  }
}

export default Dialog
