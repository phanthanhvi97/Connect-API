import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import NoteFoundPage from './pages/NoteFoundPage/NoteFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
const routes=[
    {
        path:'/',
        exact:true,
        main:()=><HomePage/>
    },
    {
        path:'/product-list',
        exact:false,
        main:()=><ProductListPage/>
    },
    {
        path:'/product/add',
        exact:false,
        main:({history})=><ProductActionPage history={history}/>
    },
    {
        path:'/product/:id/edit',
        exact:false,
        main:({match,history})=><ProductActionPage match={match} history={history}/>
    },
    {
        path:'',
        exact:false,
        main:()=><NoteFoundPage/>
    },
    
]
export default routes