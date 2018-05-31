import { Component, OnInit } from "@angular/core";
import { MediaService } from "../../services/media.service";

import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import { AlertService } from "../../services/alert.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  medias;
  selectedFile = null;

  constructor(
    private mediaService: MediaService,
    private spinnerService: Ng4LoadingSpinnerService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getMedias();
  }

  getMedias() {
    this.mediaService.getMedias().subscribe(res => {
      console.log(res);
      this.medias = res;
    });
  }

  onSelected(media) {
    this.selectedFile = media;
  }

  onDelete() {
    if (this.selectedFile) {
      this.spinnerService.show();
      console.log(this.selectedFile);
      this.mediaService.trash(this.selectedFile._id).subscribe(res => {
        this.selectedFile = null;
        this.mediaService.getMedias();
        this.spinnerService.hide();
        this.alertService.success(`file Deleted`);
        this.getMedias();
      });
      return;
    }
  }
}
