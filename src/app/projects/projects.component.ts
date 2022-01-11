import { Component, OnInit } from '@angular/core';
import {Project} from "../../types/Projects";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
