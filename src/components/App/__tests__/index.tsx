import chalk from 'chalk'
import { render } from 'ink-testing-library'
import { App } from '..'

it('renders correctly', () => {
  const { lastFrame } = render(<App />)

  expect(lastFrame()).toBe(chalk`{blue Hello world}`)
})
