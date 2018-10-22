import { Component, OnInit } from '@angular/core';
import { Job } from './job.model';
import { JobApplication } from './job-application/job-application.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  selectedJob: Job;
  jobApplications: JobApplication[] = [];
  jobs: Job[] = [];

  constructor() { }

  addJobApplication($event) {
    this.jobApplications.push($event);
  }

  addToJobList($event) {
    this.jobs.push($event);
    console.log(this.jobs);
  }

  ngOnInit() {
  }

}
