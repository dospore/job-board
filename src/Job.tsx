import React from 'react';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import { Title, SubText, Button, GridTheme } from './Components'

export const JobInfo = styled(
    ({
        className, children, title,
        location, employmentType, postDate, link
    }) => (
        <GridTheme>
            <Container className={className}>
                <Title>
                    {title}
                </Title>
                <SubText>
                    {location} | {employmentType.typeName} -- Available since {postDate}
                </SubText>
                {children}
                <a href={link} target="_blank" rel="noreferrer noopener">
                    <Button >Apply Now</Button>
                </a>
            </Container>
        </GridTheme>
    )
)`
    box-sizing: border-box;
    padding-top: 4rem;

    @media screen and (max-width: 600px) {
        padding-top: 2rem;
    }
`
