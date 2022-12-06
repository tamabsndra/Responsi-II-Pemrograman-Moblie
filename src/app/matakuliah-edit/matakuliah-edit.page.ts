import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
 selector: 'app-matakuliah-edit',
 templateUrl: './matakuliah-edit.page.html',
 styleUrls: ['./matakuliah-edit.page.scss'],
})
export class MatakuliahEditPage implements OnInit {
 id: any;
 nama_matakuliah: any;
 keterangan: any;
 constructor(private route: ActivatedRoute, private router: Router, public _apiService: ApiService,
 ) {
 this.route.params.subscribe((param: any) => {
 this.id = param.id;
 console.log(this.id);
 this.ambilMatakuliah(this.id);
 })
 }
 ngOnInit() {
 }
 ambilMatakuliah(id: any) {
 this._apiService.lihat(id, '/lihatMatakuliah.php?id=').subscribe({
 next: (hasil: any) => {
 console.log('sukses', hasil);
 let matakuliah = hasil;
 this.nama_matakuliah = matakuliah.nama_matakuliah;
 this.keterangan = matakuliah.keterangan;
 },
 error: (error: any) => {
 this._apiService.notif('gagal ambil data');
 }
 })
 }
 editMatakuliah() {
 let data = {
 id: this.id,
 nama_matakuliah: this.nama_matakuliah,
 keterangan: this.keterangan,
 }
 this._apiService.edit(data, '/editMatakuliah.php')
 .subscribe({
 next: (hasil: any) => {
 console.log(hasil);
 this.id = '';
 this.nama_matakuliah = '';
 this.keterangan = '';
 this._apiService.notif('berhasil edit Matakuliah');
 this.router.navigateByUrl('/matakuliah');
},
error: (err: any) => {
this._apiService.notif('gagal edit Matakuliah');
}
})
}
}
