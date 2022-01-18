import {Component, OnInit} from '@angular/core';
import {Skill} from "../../types/Skills";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [
    {
      name: 'AWS',
      pinned: true,
      domain: 'Backend',
      description: [
        `I have been working almost entirely on cloud native applications for over 4 years.
         I keep up to date with the latest service announcements from AWS to stay up to date with the
         available services and feature,
         and look for ways to integrate these features and services into new and existing apps I am building.`,
        `I am a AWS Certified Developer - Associate, and AWS Certified Solutions Architect – Associate.`,
        `I have experience directly working with the following services:`,
      ],
      subskills: [
        'SQS',
        'S3',
        'SNS',
        'RDS',
        'EC2',
        'ElastiCache',
        'ECS & Fargate',
        'DynamoDB',
        'Step Functions',
        'Lambda',
        'MWAA',
        'IAM',
        'KMS',
        'EFS',
        'Opensearch',
        'Transfer Family',
      ]
    },
    {
      domain: 'Frontend',
      name: 'AngularJS'
    },
    {
      domain: 'Backend',
      name: 'Elasticsearch',
      subtitle: 'Version: 6.8'
    },
    {
      domain: 'Backend',
      name: 'Redis',
      description: [
        `I have used Redis as both a caching and pub/sub service`,
        `For caching, I used it to keep API response time down for APIs used in our applications UI.`,
        `For pub/sub, I used this so that backend microservices would publish events, which another service would receive, 
         and send applicable events to users with the user interface open via a websocket connection.  This allowed
         the UI to show quick feedback to users as asynchronous processes happened.`
      ]
    },
    {
      domain: 'Devops',
      name: 'Splunk',
      description: [
        `Splunk is the tool I have been using for storing and searching logs, and setting alerts based on anomalies
         seen in the logs.`,
        `I was the admin for the splunk instance for about a year, and was responsible for onboarding users,
         patching and maintenance.`,
        `I have also made configuration changes to our applications to make our splunk logs more useful, 
         such as adding trace and spans to our logs so it is clear which logs were generated by the same process.`
      ]
    },
    {
      domain: 'Frontend',
      name: 'Bootstrap'
    },
    {
      domain: 'Backend',
      name: 'Spark',
      description: [
        `I like Spark because I find map reduce programming, and functional programming in general, to be very fun.
         I prefer Spark over Hadoop since Spark makes writing the map reduce code much simpler than Hadoop, 
         and it gives you the option of multiple languages to use.`,
        `I have only been able to use Spark in an educational setting, but would love to have a chance to apply
         this skill at work.`
      ]
    },
    {
      domain: 'Backend',
      name: 'Hadoop'
    },
    {
      domain: 'Devops',
      pinned: true,
      name: 'Docker',
      description: [
        `Docker is one of my favorite tools because of how useful it is at many different points in the process 
         of software development.`,
        `One of my favorite uses is to experiment by just starting a container and 
         jumping into it to run and test commands.`,
        `Also, having an application that is packaged with all of its dependencies so that it runs exactly the 
         same in all deployments is great as it prevents issues where certain servers may be misconfiguration.`
      ]
    },
    {
      domain: 'Devops',
      pinned: true,
      name: 'CI/CD',
      subtitle: 'Using Gitlab CI',
      description: [
        `I have a lot of experience working with Gitlab CI to perform CI/CD.  I have created CI templates that 
         automate the setup of new applications' CI so that the new applications only need to change environment variables.`,
        `I implemented a script that automated deployments while still enforcing security on who has access to deploy.`,
        `Also, I have created pipelines for automated acceptance testing, which runs all the microservices in an 
         application, and then calls the APIs against these running services in Gitlab CI.`
      ]
    },
    {
      domain: 'Devops',
      name: 'Git',
      subtitle: 'Github, Gitlab'
    },
    {
      domain: 'Backend',
      name: 'SQL',
      subtitle: 'Postgres, MySQL, Aurora'
    },
    {
      domain: 'Frontend',
      name: 'Angular Material'
    },
    {
      domain: 'Frontend',
      name: 'HTML'
    },
    {
      domain: 'Frontend',
      name: 'CSS'
    },
    {
      domain: 'Miscellaneous',
      name: 'Puppeteer',
      description: [
        'Puppeteer is one of my favorite tools since it has allowed me to automate tasks where there is not an API available.',
        `This has come in very useful at work, where I used to automate the initiazation and running of deployments, giving my team access to full CI/CD pipelines
         over a year before a similar capability was available for general use.`,
        `I also used it to automate the submission of requests for LDAP group access where the user just need to supply a JSON describing what users to add to what groups.`,
        `Outside of work, I have used puppeteer to build a crawler for finding open Covid vaccine appointments, and then sending text messages when it finds availability.`
      ]
    },
    {
      domain: 'Backend',
      name: 'Linux'
    },
    {
      domain: 'Frontend',
      name: 'JSON'
    },
    {
      domain: 'Backend',
      name: 'Express'
    },
    {
      domain: 'Backend',
      name: 'LDAP'
    },
    {
      domain: 'Backend',
      name: 'Spring Boot',
      pinned: true,
      subtitle: 'Versions: 1.4+, 2.0+',
      description: [
        ` I have heavily used Spring Boot to build a wide variety back end services.
          I have used many of the libraries that are provided, such as data-jpa, security,
          mail, validation, an more.
          Additionally, since many of these applications reside in AWS, I have also used many of the spring
          cloud libraries,
          such as starter-aws, sleuth, and vault.`,
        `I also push to integrate new features into these services to make them more reliable, observable,
         and debuggable.
         For example, I have integrated the micrometer library to report metrics to New Relic,
         allowing my team to set alerts on these metrics to quickly be notified when the application may be
         experiencing issues.`
      ]
    },
    {
      domain: 'Frontend',
      name: 'Angular',
      subtitle: 'Versions: 6+',
      description: [
        `I have used Angular heavily at my job to create views into our applications
         that allow users to view and modify data managed by the back end services.
         The UIs use the Angular HttpClient to interact with REST APIs exposed by the backend.`,
        `I also push the capabilities of our angular apps by integrating new features or features we were not
         using, such as server side rendering and websockets.`
      ]
    },
    {
      domain: 'Backend',
      name: 'Vault',
    },
    {
      domain: 'Backend',
      name: 'REST'
    },
    {
      domain: 'Devops',
      name: 'Gradle'
    },
    {
      domain: 'Devops',
      name: 'Liquibase'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
    this.skills.sort((a, b) => a.pinned != b.pinned ? (a.pinned ? -1 : 1) : a.name.localeCompare(b.name))
  }

}
