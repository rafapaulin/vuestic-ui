<template>
  <div style="max-width: 300px;">
    <va-select
      class="mb-6"
      label="Single select"
      :options="options"
      v-model="valueSingle"
    />
    <va-select
      class="mb-6"
      label="Multiple select"
      :options="options"
      v-model="valueMultiple"
      multiple
    />
    <va-select
      label="Multiple select, Max 2 selections"
      :options="options"
      v-model="valueMultipleMax"
      multiple
      max-selections="2"
    />
  </div>
</template>

<script>
export default {
  name: 'Variations',
  data () {
    return {
      options: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      valueSingle: '',
      valueMultiple: '',
      valueMultipleMax: '',
    }
  },
}
</script>
