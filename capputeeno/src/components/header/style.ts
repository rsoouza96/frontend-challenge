import styled from "styled-components"
import { Saira_Stencil_One
} from 'next/font/google'

export const sairaSetencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})


export const StyledHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
`

export const StyledLogo = styled.a `
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`

export const StyledSearchContainer = styled.div `
    display: flex;
    align-items: center;
    position: relative;
    width: 352px;

    svg { 
      position: absolute;
      right: 20px;
    }
`

export const StyledCartContainer = styled.div `
    position: relative;
    p {
      position: absolute;
      left: 15px;
      top: 50%
    }
`

export const StyledCartItemsCounter = styled.p `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: var(--delete-color);


    color: white;
    font-size: 10px;
`