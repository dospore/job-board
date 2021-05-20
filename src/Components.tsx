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
    color: ${(props: any) => props.theme.normal as string};
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 1em;
    margin-bottom: 1em;
    width: 100%;

    @media screen and (max-width: 600px) {
        font-size: 1.4rem;
    }
`

export const SubText = styled.h2`
    color: ${(props: any) => props.theme.active as string};
    font-size: 0.9rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    width: 100%;

    @media screen and (max-width: 600px) {
        font-size: 1.2rem;
    }
`

export const Button = styled.button`
    margin: 2rem 0 6rem 0;
    background: ${(props: any) => props.theme.bg as string};
    border: 1px solid ${(props: any) => props.theme.active as string};
    border-radius: 10px;
    color: ${(props: any) => props.theme.active as string};
    transition: 0.5s;
    max-width: 200px;
    width: 100%;
    padding: 10px 0;
    text-align: center;
  
    &:hover {
      background-color: ${(props: any) => props.theme.active as string};
      color: ${(props: any) => props.theme.button as string};
      cursor: pointer;
    }
`


export const GridTheme:React.FC = ({ children }) =>
    <GridThemeProvider gridTheme={gridTheme}>
        <>
        {children}
        </>
    </GridThemeProvider>
