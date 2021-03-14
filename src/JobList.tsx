import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Title, SubText, Button, GridTheme } from './Components' 
import { Container as BContainer, Row } from 'styled-bootstrap-grid';

const Container = styled(BContainer)`
    box-sizing: border-box;
`

export const calcDays = (d1:Date, d2:Date) => {// To calculate the time difference of two dates
    console.log(d1, d2) 
    var timeDiff = d2.getTime() - d1.getTime(); 
    // To calculate the no. of days between two dates 
    return Math.round(timeDiff / (1000 * 3600 * 24)); 
}

type JobType = {
    jobTitle: string // title of the job
    location: 'Remote' | 'In House' // location of work
    contract: 'Full-time' | 'Part-time' | 'Casual' | 'Flexible' // contract type
    date: Date // date the job add was posted
    link: string // url link to the job, prepend with /, something like /careers/slug
    category: 'string'
}

const FlexRow = styled(Row)`
    flex-wrap: nowrap;
    padding: 0 1em;
`

const Days = styled(SubText)`
    text-align: right;
`

const Learn = styled.a
`
    padding-left: 10px;
`

const Job:React.FC<{ job: JobType, className?: any } & { children?: ReactNode }> = 
styled(
    ({ 
        job, className
    }: { job: JobType, className: any } & { children?: ReactNode}) => {
    const { jobTitle, location, contract, date, link } = job;
    return (
        <Container className={className}>
            <FlexRow>
                <Title>{jobTitle}</Title>
                <Learn href={`${link}`}>
                    <Button>Learn more</Button>
                </Learn>
            </FlexRow>
            <FlexRow>
                <SubText>
                    {location} | {contract}
                </SubText>
                <Days>
                    {calcDays(new Date(date), new Date())} days ago
                </Days>
            </FlexRow>
        </Container>
    )
    }
)
`
    display: flex;
    flex-direction: column;
    border: 2px solid ${(props: any) => props.theme.bg as string};
    border-radius: 4px;
    margin: 10px 0px;
    padding-top: 1em;
    padding-bottom: 1em;
`


const Roles:React.FC = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
`

const Jobs:React.FC = styled.div`
    display: flex;
    flex-direction: column;
`

type RProps = {
    selected: boolean
    handleClick: () => void
    className?: any
    children?: ReactNode
}
const RoleType:React.FC<RProps> = styled(
    ({ 
        className, selected, handleClick, children
    }: RProps ) =>
    <button onClick={() => handleClick()} datatype={selected ? 'SELECTED' : ''} className={className}>
        {children}
    </button>
)`
    padding: 10px 2rem;
    margin: 5px 1em 5px 0px;
    background: ${(props: any) => props.theme.bg as string};
    border: none;
    border-radius: 4px;
    font-white: 600;
    color: ${(props: any) => props.theme.primary as string};
    width: 48%;
    margin: 5px 1% 5px 1%;

    @media screen and (min-width: 600px) {
        width: 24%;
        margin: 5px 0.5% 5px 0.5%;
    }

    @media screen and (min-width: 800px) {
        width: 19%;
    }

    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none
    }
    &[datatype="SELECTED"] {
        color: white;
        background: ${(props: any) => props.theme.primary as string};
    }
`

const JobsList:React.FC = styled(
    ({ 
        jobs, roleTypes, className
    }: { jobs: JobType[], roleTypes: string[], className: any }) => {

    const [selectedRole, setRoleType] = useState('All Roles');
    
    const filteredJobs = jobs.filter(job => selectedRole === "All Roles" || selectedRole.toLowerCase() === job.category);

    return (
        <GridTheme>
            <Container className={className}>
                <h1>Open Roles</h1>
                <Roles>
                    {roleTypes.map((roleType) => 
                        <RoleType handleClick={() => setRoleType(roleType)} selected={selectedRole === roleType}>
                            {roleType}
                        </RoleType>
                    )}
                </Roles>
                <Jobs>
                    {filteredJobs.map((job:JobType) => <Job job={job} />)}
                </Jobs>
            </Container>
        </GridTheme>
    )
}
)`
    flex-direction: column;
    margin: auto;
    padding: 5rem 0;

    &[data-name=container] {
        box-sizing: border-box;
    }

    > [data-name=col-xs-12]{
        box-sizing: border-box;
    }

    > h1 {
        color: ${(props: any) => props.theme.primary as string};
        font-weight: 600;
    }

    @media screen and (max-width: 600px) {
        margin: 1rem auto;
    }
`

export { Job, JobsList }