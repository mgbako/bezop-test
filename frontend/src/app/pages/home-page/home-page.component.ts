import { Component, OnInit } from "@angular/core";
import { MediaService } from "../../services/media.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  medias = [{ path: "/ho.jpg" }, { path: "/h1.png" }];

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.getMedias();
  }

  getMedias() {
    this.mediaService.getMedias().subscribe(res => {
      console.log(res);
      this.medias = res;
    });
  }
}
