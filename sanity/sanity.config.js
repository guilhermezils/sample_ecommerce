import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import product from './schemaTypes/product'

export default defineConfig({
  name: 'default',
  title: 'Sample_ecommerce',

  projectId: '4fr7qh2f',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes.concat([product]),
  },
})
