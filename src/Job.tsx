import React from 'react';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import { Title, SubText, Button, GridTheme } from './Components'

export const JobInfo = styled(
    ({
        className, children, title,
        jobLocations, employmentTypes, link
    }) => (
        <GridTheme>
            <Container className={className}>
                <Title>
                    {title}
                </Title>
                <SubText>
                    { employmentTypes.map((type: Record<string, string>, index: number) => {
                        if (employmentTypes.length === 1 || index === 0) {
                            return `${type.typeName}`
                        } else if (index === (employmentTypes.length - 1)) {
                            return ` or ${type.typeName}`
                        } else {
                            return `, ${type.typeName}`
                        }
                    })}
                    <span>&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;</span>
                    { jobLocations.map((location: Record<string, string>, index: number) => {
                        if (jobLocations.length === 1 || index === 0) {
                            return `${location.locationName}`
                        } else if (index === (jobLocations.length - 1)) {
                            return ` or ${location.locationName}`
                        } else {
                            return `, ${location.locationName}`
                        }
                    })}
                    <br/><br/>
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

JobInfo.defaultProps = {
    jobLocations: [],
    employmentTypes: []
}
