import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // 인증 토큰을 반환한다.
  getToken() {
    return 'my-token'; // 잠정 처리
  }
}