import React from 'react';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import { Title, SubText, Button, GridTheme } from './Components'
import { calcDays } from './JobList';

export const JobInfo = styled(
    ({
        className, children, jobTitle, 
        location, contract, date, applicationLink
    }) => (
        <GridTheme>
            <Container className={className}>
                <Title>
                    {jobTitle}
                </Title>
                <SubText>
                    {location} | {contract} - {calcDays(new Date(date), new Date())} days ago
                </SubText>
                {children}
                <a href={applicationLink} target="_blank" rel="noreferrer noopener">
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