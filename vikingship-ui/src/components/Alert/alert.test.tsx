import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import Alert, { BaseAlertProps, AlertType } from './alert'


const testAlertProp: BaseAlertProps = {
  title: "testAlert",
  closable: true,
  customClose: "关闭",
  type: AlertType.Primary
}


const testSuccessAlertProp: BaseAlertProps = {
  closable: true,
  customClose: "关闭",
  type: AlertType.Success
}

describe('test Alert component', () => {
  it('should render the correct default Alert', async () => {
    const wrapper = render(<Alert {...testAlertProp}>Nice</Alert>)
    const element = wrapper.getByText('Nice')

    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('P')
    expect(element).toHaveClass('alert-message')
    expect(element.parentNode).toHaveClass('alert alert-primary')

    const titleElement = wrapper.getByText('testAlert')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveClass('alert-title')
    expect(titleElement.parentNode).toBe(element.parentNode)

    // const iconElement = wrapper.getByText('关闭')
    // fireEvent.click(iconElement)
    // await wait(() => {
    //   expect(element).not.toBeInTheDocument()
    // })
  })

  it('should render the correct component based on different props', async () => {
    const wrapper = render(<Alert {...testSuccessAlertProp}>Nice</Alert>)
    const element = wrapper.getByText('Nice')

    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('P')
    expect(element).toHaveClass('alert-message')
    expect(element.parentNode).toHaveClass('alert alert-success')

    // const iconElement = wrapper.getByText('关闭')
    // expect(iconElement).toBeInTheDocument()
    // fireEvent.click(iconElement)
    // await wait(() => {
    //   expect(element).not.toBeInTheDocument()
    // })
  })
})
