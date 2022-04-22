import { expect, describe, test, jest, beforeEach } from '@jest/globals'
import templates from './../../src/templates/index.js'
import { repositoryTemplateMocks, serviceTemplateMocks, factoryTemplateMocks } from './mocks/index.js'

const { repositoryTemplate, serviceTemplate, factoryTemplate } = templates

describe('#Codegen 3-layers arch', () => {
    const componentName = 'product'
    const repositoryName = `${componentName}Repository`
    const serviceName = `${componentName}Service`
    const factoryName = `${componentName}Factory`

    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })

    test('#should generate repository template', () => {
        const expected = {
            fileName: repositoryName,
            template: repositoryTemplateMocks
        }

        const result = repositoryTemplate(componentName)
        expect(result).toStrictEqual(expected)
    })
    test('#should generate service template', () => {

        const expected = {
            fileName: serviceName,
            template: serviceTemplateMocks
        }

        const result = serviceTemplate(componentName, repositoryName)
        expect(result).toStrictEqual(expected)
    })
    test('#should generate factory template', () => {
        const expected = {
            fileName: factoryName,
            template: factoryTemplateMocks
        }

        const result = factoryTemplate(componentName, repositoryName, serviceName)
        expect(result).toStrictEqual(expected)
    })
})