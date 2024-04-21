import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Button,
  blackClassname,
  gradientClassname,
  linkClassname,
  outlineClassname
} from './button'

describe('<button>', () => {
  it('should render skeleton when isLoading is true', () => {
    const { container } = render(<Button isLoading />)
    const skeleton = container.querySelector('#skeleton')
    expect(skeleton).toBeInTheDocument()
  })

  it('should not render skeleton when isLoading is false', () => {
    const { container } = render(<Button isLoading={false} />)
    const skeleton = container.querySelector('#skeleton')
    expect(skeleton).not.toBeInTheDocument()
  })

  it('should pointer-events-none and opacity-50 when disabled was passed', () => {
    const { getByRole } = render(<Button disabled />)

    const buttonElement = getByRole('button')

    expect(buttonElement).toHaveClass(
      'disabled:pointer-events-none disabled:opacity-50'
    )
  })

  it('should variant is correclty when variant is black', () => {
    const { getByRole } = render(<Button variant="black" />)

    const buttonElement = getByRole('button')

    expect(buttonElement).toHaveClass(blackClassname)
  })

  it('should variant is correclty when variant is gradient', () => {
    const { getByRole } = render(<Button variant="gradient" />)

    const buttonElement = getByRole('button')

    expect(buttonElement).toHaveClass(gradientClassname)
  })

  it('should variant is correclty when variant is link', () => {
    const { getByRole } = render(<Button variant="link" />)

    const buttonElement = getByRole('button')

    expect(buttonElement).toHaveClass(linkClassname)
  })

  it('should variant is correclty when variant is ouline', () => {
    const { getByRole } = render(<Button variant="ouline" />)

    const buttonElement = getByRole('button')

    expect(buttonElement).toHaveClass(outlineClassname)
  })
})
