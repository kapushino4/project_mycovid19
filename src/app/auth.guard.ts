import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}


  // จะทำการตรวจสอบว่ามีข้อมูล username และ password อยู่ใน localStorage หรือไม่
  canActivate(): boolean {
    //typeof localStorage !== 'undefined' ใช้ตรวจสอบว่า localStorage มีอยู่หรือไม่
    if (typeof localStorage !== 'undefined' && localStorage.getItem('username') && localStorage.getItem('password')) {
      return true; // อนุญาตให้เข้าถึงหน้า
    } else {
      this.router.navigate(['/']); // ถ้าไม่มีการล็อกอิน ให้ redirect ไปที่หน้า Log
      return false; // ไม่อนุญาตให้เข้าถึงหน้า
    }
  }

}