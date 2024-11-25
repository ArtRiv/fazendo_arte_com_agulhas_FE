import { CartButton } from "./cart-button"
import { MenuButton } from "./menu-button"

export const HeaderToolBar = () => {
    return (
        <div className="flex flex-row gap-6 w-1/3 justify-center items-center">
            <MenuButton />
            <CartButton />
        </div>
    )
}