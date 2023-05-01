import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import {slide as Menu} from "react-burger-menu";
import {useMediaQuery} from "react-responsive"
import { SCREENS } from "../responsive";
import menuStyle from "./menustyle";
const ListContainer = styled.ul`

   ${tw`
     flex
     list-none
   `}
`
const NavItem = styled.li<{menu?:any}>`
   ${tw`
     text-xs
     md:text-base
     text-black
     font-medium
     mr-1
     md:mr-5
     cursor-pointer
     transition
     duration-300
     ease-in-out
     hover:text-gray-700
   `}
   ${({menu})=>menu && css`
   
   ${tw`
     text-white
     text-xl
     mb-3
     focus:text-white
   `}
   `
   

}
`
export function NavItems(){
    const isMobile = useMediaQuery({maxWidth:SCREENS.sm})
    if(isMobile){
        return(
            <Menu  style={menuStyle}>
                <ListContainer style={{zIndex:10}}>
            <NavItem menu>
          HOME
        </NavItem>
        <NavItem menu>
        CARS
        </NavItem >
        <NavItem menu>
         SERVICES
        </NavItem>
        <NavItem menu>
         CONTACT
        </NavItem>

        </ListContainer>
            </Menu>
        )
    }
      return(
        <ListContainer>
            <NavItem>
          <a style={{textDecoration:"none",color:"gray"}} href="/">HOME</a>
        </NavItem>
        <NavItem>
          <a style={{textDecoration:"none",color:"gray"}} href="/">CARS</a>
        </NavItem>
        <NavItem>
          <a style={{textDecoration:"none",color:"gray"}} href="/">SERVICES</a>
        </NavItem>
        <NavItem>
          <a style={{textDecoration:"none",color:"gray"}} href="/">CONTACT</a>
        </NavItem>

        </ListContainer>
      )
}