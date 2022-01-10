import { Component, OnInit } from '@angular/core';
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
            name: 'Elasticsearch'
        },
        {
            domain: 'Backend',
            name: 'Redis'
        },
        {
            domain: 'Devops',
            name: 'Splunk'
        },
        {
            domain: 'Frontend',
            name: 'Bootstrap'
        },
        {
            domain: 'Backend',
            name: 'Spark'
        },
        {
            domain: 'Backend',
            name: 'Hadoop'
        },
        {
            domain: 'Devops',
            name: 'Docker'
        },
        {
            domain: 'Devops',
            name: 'CI/CD',
            subtitle: 'Using Gitlab CI'
        },
        {
            domain: 'Devops',
            name: 'Git',
            subtitle: 'Github, Gitlab'
        },
        {
            domain: 'Backend',
            name: 'SQL'
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
            name: 'Puppeteer'
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
                    using,
                    such as server side rendering and websockets.`
            ]
        }
    ]

  constructor() { }

  ngOnInit(): void {
    this.skills.sort((a, b) => a.name.localeCompare(b.name))
  }

}
