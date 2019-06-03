import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Job } from '../job.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  @Output() jobWasSelected = new EventEmitter<Job>();
  jobs: Job[];

  constructor(private jobService: JobsService) { }

  onJobSelected(job: Job) {
    this.jobWasSelected.emit(job);
  }

  ngOnInit() {
    this.jobs = this.jobService.getJobs();
    this.jobService.jobsChanged.subscribe(
      (jobs: Job[]) => {
        this.jobs = jobs;
      });
  }
}