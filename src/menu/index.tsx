import React, { useRef } from "react";
import MenuItem, { MenuItemProps } from "./MenuItem";

const Menu: React.FC = (props: MenuItemProps) => {
    let menu = useRef(null);
    return (
        <MenuItem 
        ref={node => {
            console.log(node, 'node');
        }}
        {...props}
        />
    )
}

export default Menu;



