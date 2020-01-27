import { CategoryInterface } from './CategoryInteraces'

class CategoryDefault implements CategoryInterface {
    loadCategoryProducts(): void {
        console.log('loading default products')
    }
}

export default CategoryDefault