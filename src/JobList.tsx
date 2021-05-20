import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Title, GridTheme } from './Components'
import { Container as BContainer, Row } from 'styled-bootstrap-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const JobContainer = styled.a`
    .arrow {
        display: none;
    }
    
    &:hover {
        text-decoration: none;
        .title {
            color: ${(props: any) => props.theme.active as string};
        }
        .learn {
            color: ${(props: any) => props.theme.active as string};
        }
        .arrow {
            display: block;
        }
    }
`

const Container = styled(BContainer)`
    box-sizing: border-box;
`

type JobType = {
    title: string // title of the job
    location: { locationName: string } // location of work
    employmentType: { typeName: string }
    postDate: Date // date the job add was posted
    link: string // url link to the job, prepend with /, something like /careers/slug
    category: { categoryName: string }
}

const Learn = styled.div`
    display: flex;
    flex-direction: row;
    color: ${(props: any) => props.theme.normal as string};
    margin-bottom: 6rem;
`

const Job:React.FC<{ job: JobType, className?: any } & { children?: ReactNode }>
  = styled(({ job, className }: { job: JobType, className: any } & { children?: ReactNode}) => {
    const { title, link } = job;
    return (
        <Container className={className}>
            <JobContainer href={`${link}`}>
                <Row>
                    <Title className='title'>{title}</Title>
                    <Learn className='learn'><div>Learn more</div>&nbsp;&nbsp;<span className='arrow'><FontAwesomeIcon icon={faLongArrowAltRight} size='sm' /></span></Learn>
                </Row>
            </JobContainer>
        </Container>
    )
})`
    flex: 50%;
    border-top: 1px solid #083E2E;
    @media only screen and (max-width: 800px) {
        flex: 100%;
    }
`

const Roles:React.FC = styled.div`
    padding-bottom: 3rem;
    margin-bottom: 2px;
`

const Jobs:React.FC = styled.div`
    display: flex;
    flex-wrap: wrap;
`

type RProps = {
    selected: boolean
    handleClick: () => void
    className?: any
    children?: ReactNode
}

const RoleType:React.FC<RProps> = styled(({ className, selected, handleClick, children }: RProps ) =>
    <button onClick={() => handleClick()} datatype={selected ? 'SELECTED' : ''} className={className}>
        {children}
    </button>
)`
    font-size: 0.9em;
    border: none;
    background: ${(props: any) => props.theme.bg as string};
    color: ${(props: any) => props.theme.normal as string};
    padding: 10px 2rem;
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

    &[datatype="SELECTED"] {
        color: ${(props: any) => props.theme.active as string};
    }
`

const JobsList:React.FC<{ jobs: JobType[], roleTypes: string[], className?: any }>
  = styled(({ jobs, roleTypes, className }: { jobs: JobType[], roleTypes: string[], className: any }) => {

    const [selectedRole, setRoleType] = useState('All Roles');
    const filteredJobs = jobs.filter(job => selectedRole === "All Roles" || selectedRole.toLowerCase() === job.category.categoryName);

    return (
        <GridTheme>
            <Container className={className}>
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
})`
     padding: 4rem 0;
`

export { Job, JobsList }
