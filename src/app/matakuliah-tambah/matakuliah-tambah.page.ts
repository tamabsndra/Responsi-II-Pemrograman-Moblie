import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
 selector: 'app-matakuliah-tambah',
 templateUrl: './matakuliah-tambah.page.html',
 styleUrls: ['./matakuliah-tambah.page.scss'],
})
export class MatakuliahTambahPage implements OnInit {
 id: any;
 nama_matakuliah: any;
 keterangan: any;
 constructor(private router: Router, public _apiService: ApiService,) { }
 ngOnInit() {
 }
 addMatakuliah() {
 let data = {
 nama_matakuliah: this.nama_matakuliah,
 keterangan: this.keterangan,
 }
 this._apiService.tambah(data, '/tambahMatakuliah.php')
 .subscribe({
 next: (hasil: any) => {
 console.log(hasil);
 this.id = '';
 this.nama_matakuliah = '';
 this.keterangan = '';
 this._apiService.notif('berhasil input Matakuliah');
 this.router.navigateByUrl('/matakuliah');
 },
 error: (err: any) => {
 this._apiService.notif('gagal input Matakuliah');
 }
 })
 }
}
