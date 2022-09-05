import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import ProductList from '@/components/ProductList'
import ProductHome from '@/components/ProductHome'
import ProductReview from '@/components/ProductReview'
import ProductReviewDetail from '@/components/ProductReviewDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      component: ProductList
    },
    {
      path: '/product/:id',
      component: Product,
      props: route => ({id:Number(route.params.id)}),
      children:[
        {
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        {
          name: 'product-review-detail',
          path: 'review/:rid',
          component: ProductReviewDetail
        },
      ]
    }
  ]
})
