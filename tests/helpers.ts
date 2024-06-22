import { afterEach, beforeEach, vi } from 'vitest'

beforeEach(() => {
  vi.useFakeTimers()
  vi.stubEnv('TEST_VARIABLE', 'test_value')
})

afterEach(() => {
  vi.resetAllMocks()
  vi.unstubAllEnvs()
})