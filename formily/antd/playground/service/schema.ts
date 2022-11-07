import { Engine } from '@designable/core'
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer'
import { message } from 'antd'

export const saveSchema = (designer: Engine) => {
  // localStorage.setItem(
  //   'formily-schema',
  //   JSON.stringify(transformToSchema(designer.getCurrentTree()))
  // )
  window.saveConfig({
    request: JSON.stringify(transformToSchema(designer.getCurrentTree())),
    onSuccess: () => message.success('Save Success'),
  });
}

export const loadInitialSchema = (designer: Engine) => {
  try {
    window.loadConfig({
      onSuccess: (config) => {
        designer.setCurrentTree(
          transformToTreeNode(JSON.parse(config))
        )
      },
    });
  } catch {}
}
