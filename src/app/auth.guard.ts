import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const validEmail = 'frankdeesom98@gmail.com'; // อีเมลที่ถูกต้อง

    // ตรวจสอบว่า localStorage มีข้อมูล username และ password อยู่หรือไม่ และตรวจสอบว่า username เป็นอีเมลที่ถูกต้องหรือไม่
    if (typeof localStorage !== 'undefined' && localStorage.getItem('email') === validEmail && localStorage.getItem('password')) {
      return true; // อนุญาตให้เข้าถึงหน้า
    } else {
      this.router.navigate(['/']); // ส่งกลับไปหน้าหลัก
      return false; // ไม่อนุญาตให้เข้าถึงหน้า
    }
  }
}
