export const nuxtConfigCode = `
export default defineNuxtConfig({
  modules: ['@vuestic/nuxt'],

  vuestic: {
    config: {
      // Config here
    }
  }
})
`

export const installationObject = {
  npm: 'npm install @vuestic/nuxt',
  yarn: 'yarn add @vuestic/nuxt',
}

export const nuxtConfigCssCode = `
export default defineNuxtConfig({
  modules: ['@vuestic/nuxt'],

  vuestic: {
    config: {
      // Config here
    },

    css: ['typography', 'reset']
  }
})
`
