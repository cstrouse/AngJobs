import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Resume } from '../resume.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-resume-new',
  templateUrl: './resume-new.component.html',
  styleUrls: ['./resume-new.component.css']
})
export class ResumeNewComponent implements OnInit {
  @Output() newResumeCreated = new EventEmitter<Resume>();
  @Output() trySubmitForm = new EventEmitter<boolean>();
  constructor(private jobService: JobsService) { }

  ngOnInit() {
  }

  onAddResume(f: NgForm) {
    const value = f.value;
    const newResume = new Resume(value.title, value.description);

    if (newResume.title != '' && newResume.description != '') {
      this.newResumeCreated.emit(newResume);
      this.trySubmitForm.emit(true);

      //save resume
      this.jobService.addResume(newResume);
    }
    else {
      this.trySubmitForm.emit(false);
    }
  }

}
