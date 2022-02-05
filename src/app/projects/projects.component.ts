import { Component, OnInit } from '@angular/core';
import {Project} from "../../types/Projects";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  workProjects: Project[] = [
    {
      name: 'Qualified Default Investment Alternative (QDIA)',
      time: 'March 2021 - Present',
      employer: 'T. Rowe Price',
      description: [
        `The QDIA project is a high level strategic initiative at T. Rowe Price to revamp the QDIA offering in 401k plans.`,
        `At the core of project is a model created by a research team at T. Rowe Price.  This model is written in matlab,
        and takes a very long time to compute on a single computer.  To solve this, I implemented a state machine using
        AWS's Step Function service, which will divide up the work to a variable number of servers, and load the outputted
        model into a database for consumption by the API that consumes the model to make predictions.  This brought the time
        to compute the model down from weeks to a few hours.  Additionally, I developed a CI pipeline that compiles the
        matlab code so that it can be run without a license. At this point, we are generating models that use over 5 years
        of server time to generate the model in only 36 hours.`,

        `Additionally, I have worked to define the API schema that will be consumed by the public facing website, and a quarterly
        batch job, and implemented the skeleton of this into the service that will receive the requests.`
      ]
    },
    {
      name: 'Enterprise NiFi Environment',
      time: 'May 2020 - September 2020',
      employer: 'T. Rowe Price',
      description: [
        `This is a POC project I worked on to build out an enterprise ready instance of NiFi ready for multi-tenant use.
        As a part of this effort, I researched into how to run NiFi in a clustered environment and connecting it to
        a centralized NiFi Registry for versioning and storage of flows.`,

        `The result of this was a set of Docker containers that are preconfigured to connect together.`,

        `I also helped to define how users would onboard to use the NiFi environment in a self-service way, and how
        deployed containers could connect to retrieve secrets needed for the configured flows.  Additionally, I helped
        to design the process to move NiFi flows from development to production environments.`
      ]
    },
    {
      name: 'Enterprise Metadata Management & PII Detection',
      employer: 'T. Rowe Price',
      time: 'February 2018 - Present',
      description: [
        `This is an application that acts as the central enterprise repository of business, technical, and logical metadata, 
        replacing the non-standardized processes used by different business units.  The products offers many different functionalities,
        including authoring of business metadata with a rich text editor, importing of erwin data models, and automatic 
        discovery of technical metadata.  Additionally, users could author lineage information so that other users
        can see how data is moving from system to system.`,

        `Another key feature is PII detection, which is a key tool for GDPR and CCPA compliance for the firm.
        This process works by first building a database of known PII sources from the different master sources at T. Rowe;
        the data is stored salted and hashed.  Data owners can then run discovery crawls on their databases, in which the
        product will scan their datasource apply the same hashing logic, and feed machine learning models that output the
        predicted types of PII that are present.  The data owner is then presented a report of the PII detections, and they
        are able to accept or reject the system's recommendations.`,

        `Starting in 2021, I became the technical lead for the development on this project.  As lead, my responsibility
        was to engage with the product owner to prioritize, refine, and break down work into stories that were then brought into
        my team's sprints.  I then delegated the stories as necessary, as well as helped architect the software solutions,
        and reviewing the code when the story is completed.`
      ]
    },
    {
      name: 'Managed File Transfer',
      time: 'June 2017 - Present',
      employer: 'T. Rowe Price',
      description: [
        `This project is a centralized, self service file transfer application running in AWS.  It makes the exchange 
        of files between external parties and on-prem resources easy by giving user's the ability to control their 
        transfers through a simple JSON configuration and a UI with a IDE like experience and a graph based experience
        authoring these configurations.  The product integrates with SFTP, FTPS, and S3 for sending and receiving files.`,

        `One of the first features I implemented at T. Rowe was the file sync capability in the platforms managed pulls.
        Before this, everytime a scheduled file pull would happen, all files matching the provided pattern were downloaded.
        After implementing this feature, scheduled pulls that previously took hours started running in under 1 minute, enabling
        consumers to poll for files more frequently.`,

        `In order to make the system scalable and fault tolerant, file transfers are decoupled and queued using SQS.
        When issues arise, this could result in the file transfers being placed in the dead letter queue.  To reprocess
        these file transfers, we would need to get temporary elevated access to requeue the transfer.  To solve this, I 
        built out a service that gives management of SQS in a user friendly UI.  This service was later expanded upon and
        released as a deployable microservice for any team to use in their application.`,

      ]
    },
    {
      name: 'Miscellaneous',
      employer: 'T. Rowe Price',
      description: [
        `I have created template yml files that my team uses to build and deploy our projects.  These templates make it
        so when you have a new project or component, you only need to import the templates, and set environment variables specific to the project.
        I also created a script that enabled continuous deployment with the firm's deployment platform over a year before
        a similar feature was released by the deployment platform.`,

        `I often do work not directly related to the projects that I am working on that help improve the process of development.
        For example, I created a puppeteer script that automated the submission of access requests; the script takes in a JSON
        document that describes what users and what roles to request.  It then automatically logs into the access site adds
        all applicable items and submits the request.  Another example is a tool I published that automatically discovers what
        AWS credentials a user has access to, and then fetches and refreshes the credentials before they expire.  This tool
        has become so popular that it is now bundled into the default linux developer desktop.`,

        `Recently, a question and answer forum was added at T. Rowe Price for developers to ask questions that are specific
        to the company.  Since the product became generally available, I have become the highest rated user on the platform.`,
      ]
    },
  ]

  personalProjects: Project[] = [
    {
      name: 'Homelab',
      time: 'September 2020 - Present',
      employer: 'Me',
      description: [
          `I run a few servers in my homelab right now.  Currently, my setup is an Ubuntu server, which runs many of my 
          other personal projects.  It is running a Plex server, a Minecraft server, a SFTP server, and my chat-bot right now.`,

          `The other main component to my homelab is a storage server.  It runs using Unraid OS, which makes it easy to add and replace drives.
          It currently has 12TB of storage, and can be mounted via NFS.  The data on the drives is automatically encrypted at rest.
          One upgrade I would like to implement on this server is so that the encrypted drives can be automatically unlocked at startup.`,

          `Occasionally, I have small servers running on Raspberry Pi when I have small programs to run.`,

          `In terms of future work, there are a few things I would like to do.  One is improving the network security;
          currently, it blocks all non-local access on port 22, and allows HTTPS traffic from any IP.  I would like to 
          add a way for me to VPN onto my network to manage locally, as well as installing a central firewall.  Second,
          I would like a dedicated database server for my other personal projects so they do not need to rely on a local 
          persistence solution.  Third, I would like to build out capabilities to run containers.  Finally, I would like a server for IoT devices, this would allow me to control internet 
          connected devices in my house without needing to consume external services, helping to protect my privacy.`
      ]
    },
    {
      name: 'Dog Park Capacity Manager',
      time: 'May 2020',
      employer: 'Me',
      description: [
          `This is an application I built to help comply with COVID restriction at my local dog park.  When the park 
          reopened, capacity was limited to 10 people at a time.`,

          `To help ensure people could enter the park when it opened, I built a simple site with an Angular front end, 
          and an express backend.  The site would allow each member to select a limited amount a reservations per day, 
          and enforce the 10 person max at a time.`,
      ],
      link: 'https://github.com/zhartig/park-covid-capacity-manager'
    },
    {
      name: 'Dog Park Messenger',
      time: 'October 2019',
      employer: 'Me',
      description: [
        `This is an application that I wrote to solve a problem with a group text for members of a local dog park.
          The Problem is that text message groups are limited to 20 participants, and we hit this limit for the group.
          There were many members who were unwilling or unable to install a 3rd party messaging app.`,

        `To solve this, I wrote a Spring Boot application that monitors an Gmail account via Google's API.
          Users would text the email address, and the application would then publish the message to all other users, 
          with info about who sent it.`,

      ],
      link: 'https://github.com/zhartig/dogpark-messenger'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
