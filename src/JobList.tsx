import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Title, SubText, GridTheme } from './Components'
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
    title: string // title of the job
    location: 'Remote' | 'In House' // location of work
    employmentType: { typeName: string }
    postDate: Date // date the job add was posted
    link: string // url link to the job, prepend with /, something like /careers/slug
    category: { categoryName: string }
}

const FlexRow = styled(Row)`
    //flex-wrap: nowrap;
    //padding: 0 1em;
`

// const Days = styled(SubText)`
//     //text-align: right;
// `

const Learn = styled.a
`
    color: #fff;
    margin-bottom: 6rem;
`

const Job:React.FC<{ job: JobType, className?: any } & { children?: ReactNode }> =
styled(
    ({
        job, className
    }: { job: JobType, className: any } & { children?: ReactNode}) => {
    const { title, location, employmentType, link } = job;
    return (
        <Container className={className}>
            <FlexRow>
                <SubText>
                    {employmentType.typeName} / {location}
                </SubText>
                <Title>{title}</Title>
                <Learn href={`${link}`}>
                    Learn more
                </Learn>
            </FlexRow>
            {/*<FlexRow>*/}
            {/*    */}
            {/*    /!*<Days>*!/*/}
            {/*    /!*    /!*{calcDays(new Date(postDate), new Date())} days ago*!/*!/*/}
            {/*    /!*    Available since {postDate}*!/*/}
            {/*    /!*</Days>*!/*/}
            {/*</FlexRow>*/}
        </Container>
    )
    }
)
`
    flex: 50%;
    // border: 2px solid ${(props: any) => props.theme.bg as string};
    border-top: 1px solid #083E2E;
    @media only screen and (max-width: 800px) {
        flex: 100%;
    }
`


const Roles:React.FC = styled.div`
    padding-bottom: 3rem;
    border-bottom: 1px solid #083E2E
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
const RoleType:React.FC<RProps> = styled(
    ({
        className, selected, handleClick, children
    }: RProps ) =>
    <button onClick={() => handleClick()} datatype={selected ? 'SELECTED' : ''} className={className}>
        {children}
    </button>
)`
    font-size: 0.9em;
    border: none;
    background-color: #041F17;
    // background: ${(props: any) => props.theme.bg as string};
    color: #fff;
    // color: ${(props: any) => props.theme.primary as string};
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
    // &:focus {
    //     outline: none
    // }
    &[datatype="SELECTED"] {
        color: #A6D792;
        //background: ${(props: any) => props.theme.primary as string};
    }
`

const JobsList:React.FC<{ jobs: JobType[], roleTypes: string[], className: any }> = styled(
    ({
        jobs, roleTypes, className
    }: { jobs: JobType[], roleTypes: string[], className: any }) => {

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
}
)`
    //flex-direction: column;
    // margin: auto;
     padding: 4rem 0;
    //
    // &[data-name=container] {
    //     box-sizing: border-box;
    // }
    //
    // > [data-name=col-xs-12]{
    //     box-sizing: border-box;
    // }
    //
    // > h1 {
    //     color: ${(props: any) => props.theme.primary as string};
    //     font-weight: 600;
    // }
    //
    // @media screen and (max-width: 600px) {
    //     margin: 1rem auto;
    // }
`

export { Job, JobsList }
