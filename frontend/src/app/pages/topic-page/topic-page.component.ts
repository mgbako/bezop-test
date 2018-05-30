import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AlertService } from '../../services/alert.service';
import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.scss']
})
export class TopicPageComponent implements OnInit {
  topics;

  constructor(private postService: PostService,
    private spinnerService: Ng4LoadingSpinnerService, 
    private alertService: AlertService,
    private authService: AuthService) { }

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
    this.postService.getTopic().subscribe(
      res => {
        this.spinnerService.hide();
        this.topics = res;
        console.log(res);
      },
      error => {
        this.spinnerService.hide();
        console.log(error);
      }
    )
  }

  onSubmit(form: NgForm) {
    this.spinnerService.show();

    this.postService.topic({name: form.value.name}).subscribe(
      res => {
        this.alertService.success('Topic Created');
        this.spinnerService.hide();
        this.getTopics();
        form.resetForm();
      },
      error => {
        this.alertService.error(error.message);
        this.spinnerService.hide();
        console.log(error);
      }
    );

  }

  onEdit(topic){
    console.log(topic);
  }

  onDelete(topic){
    console.log(topic);
  }

}
