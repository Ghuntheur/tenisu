import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
  const scrollPosition = ref()

  const update = () => {
    scrollPosition.value =
      (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100
  }

  onMounted(() => window.addEventListener('scroll', update))
  onUnmounted(() => window.removeEventListener('scroll', update))

  return { scrollPosition }
}
