import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Drawer from '../Drawer.vue'

describe('[COMP]: Drawer', () => {
  it('should be importer', () => {
    expect(Drawer).toBeTruthy()
  })

  it('should open wrapper', async () => {
    const wrapper = mount(Drawer)
    const container = wrapper.get('.drawer-container')

    expect(container.classes()).toContain('drawer-container')
    await wrapper.vm.open()
    expect(container.classes()).toContain('opened')
  })
})
