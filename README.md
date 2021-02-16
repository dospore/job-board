# Job board component

Simple component for advertising available jobs. This was for personal use so I built it for my use case.
Pretty poor customisability past setting theme colours. 

## How to use
To compile your code once, run

- `npm run build`.

To compile your code once and refresh on file change, run

- `npm run start`.

## List Jobs
```js
    import { JobBanner, BannerImg, BannerText, SubBanner, ThemeProvider, JobsList} from '@mycelium-ethereum/job-board'

    const theme = {
        "primary": "#0000bd",
        "secondary": "#7B7B7B",
        "bg": "#E5E5F8"
    }

    const jobs = [
        {
            category: 'engineering'
            jobTitle: 'Example Engineer Job Title'
            date: 2020-09-01
            slug: "engineering-job"
            location: 'Remote'
            contract: 'Full-Time'
            applicationLink: 'https://www.google.com' // this is the link that the user will be directed to after clicking apply
        }, {
            category: 'design'
            jobTitle: 'Example Job Title'
            date: 2020-09-01
            slug: "design-job"
            location: 'Remote'
            contract: 'Full-Time'
            applicationLink: 'https://www.google.com'
        }
    ]
    
    const roleTypes = ["All Roles", "Engineering", "Legal", "Marketing", "Design"] // default selected is All Roles

    <ThemeProvider theme={theme}>
        <JobBanner>
            <BannerImg src="/hiring-banner.png" alt='Hiring Banner'/>
            <BannerText>
                Careers
            </BannerText>
        </JobBanner>
        <SubBanner>
            <h1>Example title oooooo yeah</h1>
            <h2>Example sub heading</h2>
        </SubBanner>
        <JobsList 
            jobs={jobs} 
            roleTypes={roleTypes} 
        />
    </ThemeProvider>
```

### Display Job Info
```js
    <JobInfo {...jobs[0]}>
        {/* Some text. Doesnt have to be markdown but I parse markdown*/}
        <Markdown source={rawMarkdownBody} escapeHtml={false} />
    </JobInfo
```
### Happy Building ♡



