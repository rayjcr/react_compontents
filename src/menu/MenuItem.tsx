import React, { forwardRef } from 'react';

export interface MenuItemProps {
    data?: any[] | [];
    disabled?: boolean;
}

// const MenuItem = () => {

// }

const MenuItem = forwardRef((props, ref) => {
    return (
        <div>我这里是菜单</div>
    )
})

export default MenuItem;