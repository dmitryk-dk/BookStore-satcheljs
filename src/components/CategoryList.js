import * as React from 'react';
import getStore from '../store/store';
import selectCategory from '../actions/selectCategory';
import {observer} from 'mobx-react';
import cx from 'classnames';
import styles from '../AppStyles.css';

//const cx = classnames(styles);

export default observer(()=> {

        const store = getStore();
        const selectedCategoryId = getStore().selectedCategoryId;
        return (
            <div className={cx('category')}>
                <h2>Categories</h2>
                {
                    Object.keys(store.categories).map(categoryId => {
                        const category = store.categories[categoryId];
                        return (
                            <div
                                onClick={() => {selectCategory(categoryId);}}
                                key={categoryId}
                                className={cx({selected: selectedCategoryId === categoryId}, 'selectable')}>
                                {category.name}
                            </div>
                        );
                    })
                }
            </div>
        );
})


