import React, { Component } from 'react';
import {observer} from 'mobx-react';
import BookList from './BookList';
import Cart from './Cart';
import CategoryList from './CategoryList';
import Description from './Description';


export default observer(() => {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <div>
                    <div style={{display: 'flex'}}>
                        <CategoryList />
                        <BookList />
                    </div>
                    <div>
                        <h2>Shopping Cart</h2>
                        <Cart />
                    </div>
                </div>
                <Description />
            </div>
        </div>
    );
});
