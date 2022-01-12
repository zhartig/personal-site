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
      name: 'Qualified Default Investment Alternative',
      employer: 'T. Rowe Price',
      description: [

      ]
    },
    {
      name: 'Managed File Transfer',
      employer: 'T. Rowe Price',
      description: [

      ]
    },
  ]

  personalProjects: Project[] = [
    {
      name: 'Homelab',
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
          persistence solution.  Finally, I would like a server for IoT devices, this would allow me to control internet 
          connected devices in my house without needing to consume external services, helping to protect my privacy.`
      ]
    },
    {
      name: 'Dog Park Messenger',
      employer: 'Me',
      description: [
          `This is an application that I wrote to solve a problem with a group text for members of a local dog park.
          The Problem is that text message groups are limited to 20 participants, and we hit this limit for the group.
          There were many members who were unwilling or unable to install a 3rd party messaging app.`,
          `To solve this, I wrote a Spring Boot application that monitors an Gmail account via Google's API.
          Users would text the email address, and the application would then publish the message to all other users, 
          with info about who sent it.`,
          `View it on Github -- TODO make public`
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
