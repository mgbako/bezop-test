import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"]
})
export class FileUploadComponent implements OnInit {
  selectedFile: File = null;

  constructor(public http: HttpClient) {}

  ngOnInit() {}

  onSelectedFile(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const formData: FormData = new FormData();
    formData.append("file", this.selectedFile);

    console.log("FormData", formData);

    this.http
      .post("http://localhost:5000/api/medias", formData)
      .subscribe(res => {
        console.log(res);
      });
  }
}
