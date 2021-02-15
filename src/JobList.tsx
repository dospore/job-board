import React, { useState } from 'react';
import { styled } from 'styled-components'

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
    slug: string // url slug
    category: 'string'

}

const Job:React.FC = styled(
    ({ 
        job, className
    }: { job: JobType, className: any }) => {
    const { jobTitle, location, contract, date, slug } = job;
    return (
        <div className="job">
            <div className="info">
                <h1>{jobTitle}</h1>
                <h2>{location} | {contract}</h2>
            </div>
            <div className="right-content">
                <a href={`/${slug}`}>
                    <button className="learn">Learn more</button>
                </a>
                <h2>{calcDays(new Date(date), new Date())} days ago</h2>
            </div>
        </div>
    )
    }
)
`
    .job {
        display: flex;
        border: 2px solid #E5E5F8;
        border-radius: 4px;
        margin: 10px 0px;
        padding: 0px 1em;
    }
    .job .info {
        width: 100%;
    }
    .job .right-content {
        float: right;
        text-align: right;
        padding: 20px 0;
        width: 20rem;
    }
    .learn {
        padding: 10px;
        margin: 5px 0;
        width: 100px;
        background: #0000bd;
        border: none;
        border-radius: 4px;
        font-white: 600;
        color: #fff;
    }
    .job h2 {
        color: #7B7B7B;
        font-size: 20px;
    }
    .learn:hover {
        cursor: pointer;
    }
    .learn:focus {
        outline: none
    }
`


const JobsList:React.FC = styled(({ jobs, className }: { jobs: JobType[], className: any }) => {
    const [selectedRole, setRoleType] = useState('All Roles')
    const roleTypes = ["All Roles", "Engineering", "Legal", "Marketing", "Design"]
    return (
        <div className={className['jobs-container']}>
            <h1>Open Roles</h1>
            <div className="roles">
                {roleTypes.map((roleType) => 
                    <button onClick={() => setRoleType(roleType)}className={`btn ${roleType === selectedRole ? 'selected' : ''}`}>
                        {roleType}
                    </button>
                )}
            </div>
            <div className="jobs">
                {jobs.filter(job => selectedRole === "All Roles" || selectedRole.toLowerCase() === job.category).map((job:JobType) => 
                    <Job job={job} />
                )}
            </div>
        </div>
    )
}
)`
    .jobs-container {
        flex-direction: column;
        max-width: 70rem;
        margin: 5rem auto;
    }

    .jobs-container h1 {
        color: #0000bd;
        font-weight: 600;
    }
    .roles {
        display: flex;
        margin-bottom: 20px;
    }
    .jobs {
        display: flex;
        flex-direction: column;
    }
    .btn {
        padding: 10px 2rem;
        margin: 5px 1em 5px 0px;
        background: #E5E5F8;
        border: none;
        border-radius: 4px;
        font-white: 600;
        color: #0000bd;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus {
        outline: none
    }
    .selected {
        color: white;
        background: #0000bd;
    }
`

export { Job, JobsList }