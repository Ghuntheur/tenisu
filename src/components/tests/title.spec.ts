import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import Title from '../Title.vue'

describe('[COMP]: title', () => {
  it('should be importer', () => {
    expect(Title).toBeTruthy()
  })

  it('should render good tag', async () => {
    const wrapper = shallowMount(Title, {
      props: {
        tag: 'h1'
      },
      slots: {
        default: 'titre'
      }
    })

    expect(wrapper.element.tagName).toBe('H1')
    await wrapper.setProps({ tag: 'h3' })
    expect(wrapper.element.tagName).toBe('H3')
  })
})
