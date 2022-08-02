import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import clienteAxios from '../../config/axios';

import './ShopingCard.scss'

export default function ButtonAddCart(product) {
    // const { profile } = useSelector(state => state.userReducer)
    let history = useHistory()

    async function handleClick(e) {
        e.preventDefault()
        let id_cart = localStorage.getItem("id_cart")
        await clienteAxios.post(`/shoping/insert-product/${id_cart}`, product)
        history.push("/shoping-car")
    }
    return (
        <div className = 'cardText'>
            <button className='add' onClick={handleClick}>Agregar al carrito</button>
        </div>
    )
}
