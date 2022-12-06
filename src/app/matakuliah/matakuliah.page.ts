import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-matakuliah',
 templateUrl: './matakuliah.page.html',
 styleUrls: ['./matakuliah.page.scss'],
})
export class MatakuliahPage {
 page = 0;
 perPage = 10;
 matakuliah: any[] = [];
 lists: any[] = [];
 constructor(
  public _apiService: ApiService,
  private router : Router,
  private authService : AuthenticationService,
  private alertController: AlertController,
  ) { }
 ionViewDidEnter() {
 console.log('jika selesai loading');
 this.page = 0;
 this.perPage = 10;
 this.getMatakuliah();
 }
 paginateArray() {
 this.page++;
 return this.matakuliah.filter(
 x => x.urutan_list > (this.page * this.perPage - this.perPage) && x.urutan_list <= (this.page * this.perPage)
 );
 }
 getMatakuliah() {
 this._apiService.tampil('tampilMatakuliah.php').subscribe({
 next: (res: any) => {
 console.log('sukses', res);
 this.matakuliah = res;
 this.lists = this.paginateArray();
 },
 error: (err: any) => {
 console.log(err);
 },
 })
 }
 doRefresh(event: any) {
 console.log('Mulai Refresh Konten');
 setTimeout(() => {
  console.log('Selesai Refresh Konten');
  event.target.complete();
  this.page = 0;
  this.perPage = 10;
  this.getMatakuliah();
  }, 2000);
  }
  loadMore(event: any) {
  console.log(event);
  setTimeout(() => {
  const array = this.paginateArray();
  console.log('new data: ', array);
  this.lists = this.lists.concat(array);
  console.log('list data: ', this.lists);
  event.target.complete();
  if (array?.length < this.perPage) {
  event.target.disabled = true;
  };
  }, 1000);
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true});
  }

  deleteMatakuliah(id: any) {
  this.alertController.create({
  header: 'perhatian',
  subHeader: 'Yakin menghapus data ini?',
  buttons: [
  {
  text: 'Batal',
  handler: (data: any) => {
  console.log('dibatalkan', data);
  }
  },
  {
  text: 'Yakin',
  handler: (data: any) => {
  //jika tekan yakin
  this._apiService.hapus(id, '/hapusMatakuliah.php?id=').subscribe({
  next: (res: any) => {
  console.log('sukses', res);
  this.page = 0;
  this.perPage = 10;
  this.getMatakuliah();
  },
  error: (error: any) => {
  this._apiService.notif('gagal');
  }
  })
  }
  }
]
}).then(res => {
res.present();
})
}
}
