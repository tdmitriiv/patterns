import { CategoryInterface } from './CategoryInteraces'

class CategorySpecial implements  CategoryInterface {
    loadCategoryProducts(): void {
        console.log('loading special category products')
    }
}

export default CategorySpecial
