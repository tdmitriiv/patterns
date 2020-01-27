import { CategoryInterface } from './CategoryInteraces'

class CategoryVip implements CategoryInterface {
    loadCategoryProducts(): void {
        console.log('loading vip products')
    }
}

export default CategoryVip