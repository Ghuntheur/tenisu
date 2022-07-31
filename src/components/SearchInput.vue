<template>
  <input
    type="text"
    :placeholder="placeholder"
    class="search-input-container"
    v-bind="$attrs"
    @input="handleChange"
  />
</template>

<script setup lang="ts">
interface IProps {
  placeholder?: string
  modelValue?: string
}

withDefaults(defineProps<IProps>(), {
  placeholder: 'Rechercher un joueur',
  modelValue: ''
})

const emit = defineEmits(['update:modelValue'])

const handleChange = (ev: Event) => {
  emit('update:modelValue', (ev.target as HTMLInputElement).value)
}
</script>

<style lang="scss" scoped>
.search-input-container {
  background-color: var(--color-dark);
  border: none;
  padding: 20px;
  border-radius: 8px;
  color: var(--color-secondary);
  outline: none;
  color: var(--color-secondary);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-h5);

  &::placeholder {
    color: var(--color-secondary);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-h5);
  }
}
</style>
