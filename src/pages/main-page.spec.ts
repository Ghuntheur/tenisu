import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import MainPage from '@/pages/MainPage.vue'

describe('[PAGE]: main', () => {
  it('should be defined', () => {
    expect(MainPage).toBeDefined()
  })
})
