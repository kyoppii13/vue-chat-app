<template>
  <button
    :type="type"
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
    >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ChatButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 親へクリックイベントを伝搬
    handleClick (ev) {
      this.$emit('click', ev)
    }
  },
  computed: {
    classes () {
      const cls = this.type === 'submit' ? (this.type + '-') : ''
      return [`${cls}button`]
    }
  }
}
</script>

<style scoped>
.submit-button {
  height: 4em;
}
</style>
