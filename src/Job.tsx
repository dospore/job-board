import React from 'react';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import { Title, SubText, Button, GridTheme } from './Components'
import { calcDays } from './JobList';

export const JobInfo = styled(
    ({
        className, children, title,
        location, employmentType, postDate, applicationLink
    }) => (
        <GridTheme>
            <Container className={className}>
                <Title>
                    {title}
                </Title>
                <SubText>
                    {location} | {employmentType} - {calcDays(new Date(postDate), new Date())} days ago
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
