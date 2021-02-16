import React from 'react';
import styled from 'styled-components';
import { Container as BContainer } from 'styled-bootstrap-grid';

const Container = styled(BContainer)`
    box-sizing: border-box;
` 

const BannerImg = styled.img`
    width: 100%;
    height: 100%;
    min-height: 20vh;
    object-fit: cover;
`

const BannerText = styled(
    ({
        className, children
    }) => (
        <Container className={className}>
            {children}
        </Container>
    )
)`
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: ${(props: any) => props.theme.primary as string};
    letter-spacing: 5px;
    font-size: 4rem;
    font-weight: 600;
    margin: auto;
    text-align: center;
    height: fit-content;
    padding-bottom: 20px;
    @media screen and (max-width: 600px) {
        font-size: 2.5rem;
    }
`

const JobBanner:React.FC = styled.div`
    position: relative;
    padding: 0;
`

const StyledContainer = styled(Container)`
    margin: auto;

    > h1 {
        font-weight: 600;
        font-size: 1.9rem;
        color: ${(props: any) => props.theme.primary as string};
    }

    > h2 {
        font-weight: 400;
        font-size: 1.3rem;
    }

    @media screen and (max-width: 600px) {
        > h1 {
            font-size: 1.7rem;
        }

        > h2 {
            font-size: 1.1rem;
        }
    }
`

const SubBanner:React.FC = styled(
    ({
        className, children
    }) => (
        <div className={className}>
            <StyledContainer>
                {children}
            </StyledContainer>
        </div>
    )
)
`
    background: ${(props: any) => props.theme.bg as string};
    padding: 4rem 0;
    @media screen and (max-width: 600px) {
        padding: 2rem 0;
    }
`

export { JobBanner, BannerText, BannerImg, SubBanner }