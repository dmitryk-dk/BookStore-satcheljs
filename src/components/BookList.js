import * as React from 'react';
import getStore from '../store/store';
import selectBook from '../actions/selectBook';
import {observer} from 'mobx-react';
import cx from 'classnames';
import styles from '../AppStyles.css';

//const cx = classnames(styles);


export default observer(()=> {

        const store = getStore();
        const categoryId = store.selectedCategoryId;
        const bookIds = Object.keys(store.books).filter(bookId => store.books[bookId].categoryId === categoryId);
        const selectedBookId = getStore().selectedBookId;

        return (<div className={cx('books')}>
            <h2>Books</h2>
            {bookIds.map(bookId => (
                <div
                    onClick={() => selectBook(bookId)}
                    key={bookId}
                    className={cx({selected: selectedBookId === bookId}, 'selectable')}>
                    {store.books[bookId].name}
                </div>
            ))}
        </div>)
})


