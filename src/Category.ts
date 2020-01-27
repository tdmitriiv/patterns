import CategoryFactory from './CategoryFactory'
import { CategoryInterface } from './CategoryInteraces'

class Category {
    factory: CategoryFactory

    constructor(factory: CategoryFactory) {
        this.factory = factory
    }

    loadCategory(type: string): CategoryInterface {
        let category = this.factory.createCategory(type)
        category.loadCategoryProducts()
        return category
    }
}

export default Category