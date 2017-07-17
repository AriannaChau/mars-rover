import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
  providers: []
})
export class PhotosListComponent implements OnInit {
  @Input() childPhotos;

  constructor(
    // private photoService: photoService
  ) { }

  // saveImage(imgURL: string, camera: string, date : string): void {
  //   const newPhoto: Photo = new Photo()
  // }

  ngOnInit() {
    // console.log(this.childPhotos)
    console.log(this.childPhotos.photos[0].camera.name)
  }

}
