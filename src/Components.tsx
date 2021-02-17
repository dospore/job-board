import React from 'react';
import styled from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';

export const gridTheme = {
  container: {
    maxWidth: {
      xxl: 1280,
      xl: 1280,
      lg: 1280,
    },
  },
}

export const Title = styled.h1`
    color: ${(props: any) => props.theme.primary as string};
    font-size: 1.8rem;
    font-weight: 600;
    width: 100%;

    @media screen and (max-width: 600px) {
        font-size: 1.4rem;
    }
`

export const SubText = styled.h2`
    color: ${(props: any) => props.theme.secondary as string};
    font-size: 1.4rem;
    margin-bottom: auto;
    width: 100%;

    @media screen and (max-width: 600px) {
        font-size: 1.2rem;
    }
`

export const Button = styled.button
`
    padding: 10px;
    margin: 1.2rem 0;
    width: 10rem;
    background: ${(props: any) => props.theme.primary as string};
    border: none;
    border-radius: 4px;
    font-weight: 600;
    color: #fff;

    @media screen and (max-width: 600px) {
        width: 7rem;
    }

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none
    }
`


export const GridTheme:React.FC = ({ children }) => 
    <GridThemeProvider gridTheme={gridTheme}>
        <>
        {children}
        </>
    </GridThemeProvider>