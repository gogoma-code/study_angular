import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  checkAuth(): boolean {
    // 잠정 처리: 인증된 사용자인지 체크
    let ran = Math.random();
    const isAuth = ran < 0.5;
    isAuth ? alert('인증된 사용자' + ran) : alert('인증되지 않은 사용자'+ ran)
    return isAuth;
  }

  canActivate() {
    return this.checkAuth();
  }
}

@Injectable()
export class AuthChildGuard implements CanActivateChild {

  checkAuth(): boolean {
    // 잠정 처리: 인증된 사용자인지 체크
    let ran = Math.random();
    const isAuth = ran < 0.5;
    isAuth ? alert('인증된 사용자' + ran) : alert('인증되지 않은 사용자'+ ran)
    return isAuth;
  }

  canActivateChild() {
    return this.checkAuth();
  }
}
