import { CONSTANTS } from '@/app/constants'
import { loginError } from '@/utils/constants/login'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { FormLogin } from './form-login'

const CORRECTLY_EMAIL_LOGIN = 'mateuspaulo1337@gmail.com'

describe('form login', () => {
  it('should render username and password fields', () => {
    const { getByLabelText } = render(<FormLogin />)

    const usernameInput = getByLabelText('Email')
    const passwordInput = getByLabelText('Password')

    expect(usernameInput).toBeVisible()
    expect(passwordInput).toBeVisible()
  })
  it('should render submit button to form', () => {
    const { getByLabelText } = render(<FormLogin />)

    const buttonElement = getByLabelText('button-submit-login')

    expect(buttonElement).toBeVisible()
  })
  it('should render correctly text in button before submit', () => {
    const { getByLabelText } = render(<FormLogin />)

    const buttonElement = getByLabelText('button-submit-login')

    expect(buttonElement).toHaveTextContent(CONSTANTS.button_start_session)
  })
  it('should render correctly text in button and render a loader spinner component in button after submit', async () => {
    const { getByLabelText } = render(<FormLogin />)

    const buttonElement = getByLabelText('button-submit-login')
    const usernameInput = getByLabelText('Email')
    const passwordInput = getByLabelText('Password')

    await userEvent.type(usernameInput, CORRECTLY_EMAIL_LOGIN)
    await userEvent.type(passwordInput, '159630Zeust12@')
    await userEvent.click(buttonElement)

    const loaderSpinner = getByLabelText('loader-spinner')

    await waitFor(() => {
      expect(buttonElement).toHaveTextContent(
        CONSTANTS.button_loading_start_session
      )
      expect(loaderSpinner).toBeVisible()
    })
  })
  it('should show error when click on submit button and with username and password empty', async () => {
    const { getByLabelText } = render(<FormLogin />)

    const buttonElement = getByLabelText('button-submit-login')

    await userEvent.click(buttonElement)

    await waitFor(() => {
      expect(screen.getByText(loginError.invalidEmail.message))
      expect(screen.getByText(loginError.invalidPasswordLength.message))
    })
  })
  it('should show error in password field when dont have least one uppercase letter', async () => {
    const { getByLabelText } = render(<FormLogin />)

    const usernameInput = getByLabelText('Email')
    const passwordInput = getByLabelText('Password')
    const buttonElement = getByLabelText('button-submit-login')

    await userEvent.type(usernameInput, CORRECTLY_EMAIL_LOGIN)
    await userEvent.type(passwordInput, '159630zeust12@')

    await userEvent.click(buttonElement)

    await waitFor(() => {
      expect(
        screen.getByText(loginError.invalidUppercaseLetterPassword.message)
      )
    })
  })
  it('should show error in password field when dont have least one lowercase letter', async () => {
    const { getByLabelText } = render(<FormLogin />)

    const usernameInput = getByLabelText('Email')
    const passwordInput = getByLabelText('Password')
    const buttonElement = getByLabelText('button-submit-login')

    await userEvent.type(usernameInput, CORRECTLY_EMAIL_LOGIN)
    await userEvent.type(passwordInput, '159630ZEUST@')

    await userEvent.click(buttonElement)

    await waitFor(() => {
      expect(
        screen.getByText(loginError.invalidLowercaseLetterPassword.message)
      )
    })
  })
  it('should show error in password field when this dont have least one special character', async () => {
    const { getByLabelText } = render(<FormLogin />)

    const usernameInput = getByLabelText('Email')
    const passwordInput = getByLabelText('Password')
    const buttonElement = getByLabelText('button-submit-login')

    await userEvent.type(usernameInput, CORRECTLY_EMAIL_LOGIN)
    await userEvent.type(passwordInput, '159630Zeust12')

    await userEvent.click(buttonElement)

    await waitFor(() => {
      expect(
        screen.getByText(loginError.invalidSpecialCharacterPassword.message)
      )
    })
  })
  it('should show error in password field when this dont have least one number', async () => {
    const { getByLabelText } = render(<FormLogin />)

    const usernameInput = getByLabelText('Email')
    const passwordInput = getByLabelText('Password')
    const buttonElement = getByLabelText('button-submit-login')

    await userEvent.type(usernameInput, CORRECTLY_EMAIL_LOGIN)
    await userEvent.type(passwordInput, 'Zeasadasdust@')

    await userEvent.click(buttonElement)

    await waitFor(() => {
      expect(screen.getByText(loginError.invalidNumberPassword.message))
    })
  })
})
