"use client"
import UseLocalStorage from "@/hooks/useLocalStorage"
import CartIcon from "../cartIcon"
import SearchIcon from "../searchIcon"
import SearchInput from "../searchInput"
import { StyledCartItemsCounter, StyledCartContainer, StyledHeader, StyledLogo, StyledSearchContainer, sairaSetencil } from "./style"

const Header = () => {
    const { cartItems } = UseLocalStorage('cart-items')


    return (
        <StyledHeader>
            <StyledLogo className={sairaSetencil.className}>Capputeeno</StyledLogo>
            <StyledSearchContainer>
                <SearchInput />
                <SearchIcon />
            </StyledSearchContainer>
            <StyledCartContainer>
                <CartIcon />
                { cartItems.length && <StyledCartItemsCounter>{ cartItems.length }</StyledCartItemsCounter> }
            </StyledCartContainer>
        </StyledHeader>
    )
}

export default Header
