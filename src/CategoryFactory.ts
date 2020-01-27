import { CategoryInterface } from './CategoryInteraces'
import CategoryDefault from './CategoryDefault'
import CategoryVip from './CategoryVip'
import CategorySpecial from './CategorySpecial'

class CategoryFactory {
    createCategory (categoryType: string): CategoryInterface {
        if (categoryType === 'vip') {
            return new CategoryVip()
        }
        if (categoryType === 'special') {
            return new CategorySpecial()
        }
        return new CategoryDefault()
    }
}

export default CategoryFactory
