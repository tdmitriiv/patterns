import { CategoryInterface } from './CategoryInteraces'

abstract class Category {
    loadCategory(type: string): CategoryInterface {
        let category = this.createCategory(type)
        category.loadCategoryProducts()
        return category
    }

    // фабричный метод
    abstract createCategory(type: string): CategoryInterface
}

export default Category
