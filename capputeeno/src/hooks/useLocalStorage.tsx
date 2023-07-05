"use client"
import { useState } from "react"

const UseLocalStorage = <T,> (key: string) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem(key) ?? ''))
    // useEffect(() => {
    //     setCartItems()
    // }, [])

    const updateLocalStorage = (newCart: T) => {
        setCartItems(newCart)
        localStorage.setItem(key, JSON.stringify(newCart))
    }

    return {
        cartItems,
        updateLocalStorage
    }
}

export default UseLocalStorage
