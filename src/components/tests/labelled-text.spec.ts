import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import LabelledText from '../LabelledText.vue'

describe('[COMP]: labelled-test', () => {
  it('should render label and value', () => {
    const wrapper = mount(LabelledText, {
      props: { label: 'label', value: 'value' }
    })

    expect(wrapper.get('.label').text()).toBe('label')
    expect(wrapper.get('.value').text()).toBe('value')
  })

  it('should render only label', () => {
    const wrapper = mount(LabelledText, {
      props: { label: 'label' }
    })

    expect(wrapper.get('.label').text()).toBe('label')
    expect(wrapper.find('.value').exists()).toBe(false)
  })

  it('should render slot for value', () => {
    const wrapper = mount(LabelledText, {
      props: { label: 'label' },
      slots: {
        default: '<p class="slot">Le slot</p>'
      }
    })

    expect(wrapper.get('.label').text()).toBe('label')
    expect(wrapper.find('.slot').exists()).toBeTruthy()
    expect(wrapper.find('.slot').html()).toContain('Le slot')
  })
})
