import {action} from 'satcheljs';
export const addBookToCart = action('addBookToCart', (bookId) => ({bookId}));
export const removeBookFromCart = action('removeBookFromCart', (bookId) => ({bookId}));
export const _removeBookFromCart = action('_removeBookFromCart', (bookId) => ({bookId}));
export const selectBookInCart = action('selectBookInCart', (bookId) => ({bookId}));
export const buy = action('buy');
export const beginBuying = action('beginBuying');
export const    finishBuying = action('finishBuying');
