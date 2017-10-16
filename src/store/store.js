import {createStore} from 'satcheljs';


// Subscribe to mutators
import '../mutators/selectedBookId';
import '../mutators/selectedCategoryId';
import '../mutators/cart/books';
import '../mutators/cart/buying';
import '../mutators/cart/selectedBookId';

import '../orchestrators/removeBookFromCart';
import '../orchestrators/buy';

const sampleData = {
    books: {
        '1': {
            name: 'Boiling Water',
            categoryId: '1',
            description: 'A thrilling recipe book about how to perform one of the most important tasks in human history. Beautifully illustrated step by step instruction sets this book apart from all other boiling water recipe book.',
            price: 19.95
        },
        '2': {
            name: 'Grilling: The One True Form of Cooking',
            categoryId: '1',
            description: 'The definitive guide on grilling everything from pizza, cakes, and even a salad.',
            price: 39.95

        },
        '3': {
            name: 'Ready Player One',
            categoryId: '2',
            description: 'A novel where a boy tries to impress a girl with his nerdiness.',
            price: 16.95
        },
        '4': {
            name: 'Off to Be the Wizard',
            categoryId: '2',
            description: 'Another novel where a boy tries to impress a girl with his nerdiness.',
            price: 9.95
        },
        '5': {
            name: 'A Wrinkle in Time',
            categoryId: '2',
            description: 'The Darkness Has You',
            price: 19.95
        },
    },
    categories: {
        '1': {
            name: 'Cookbook'
        },
        '2': {
            name: 'Science Fiction'
        }
    },
    selectedCategoryId: '1',
    selectedBookId: '1',
    cart: {
        books: [],
        selectedBookId: null,
        isBuying: false
    }
};

export default createStore('BookStore', sampleData);
