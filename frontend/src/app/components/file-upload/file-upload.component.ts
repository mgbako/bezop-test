import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";

import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import { AlertService } from "../../services/alert.service";
import { MediaService } from "../../services/media.service";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"]
})
export class FileUploadComponent implements OnInit {
  selectedFile: File = null;

  constructor(
    public http: HttpClient,
    private spinnerService: Ng4LoadingSpinnerService,
    private alertService: AlertService,
    private mediaService: MediaService
  ) {}

  ngOnInit() {}

  onSelectedFile(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    this.spinnerService.show();
    const formData: FormData = new FormData();
    formData.append("file", this.selectedFile);

    console.log("FormData", formData);

    this.mediaService.newMedia(formData).subscribe(res => {
      this.spinnerService.hide();
      this.alertService.success(`file Uploaded`);
      console.log(res);
    });
  }
}
