import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

export default function Header() {
    const cartSize = useSelector((state) => state.cart.length);

    return (
        <Container>
            <Link to="/">
                {/* <div /> */}
                <img
                    src="https://logodownload.org/wp-content/uploads/2020/02/netshoes-logo-5.png"
                    alt="logo"
                />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}
