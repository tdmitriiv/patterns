import Category from './Category'
import CategoryFactory from './CategoryFactory'

const category = new Category(new CategoryFactory())
category.loadCategory('def')