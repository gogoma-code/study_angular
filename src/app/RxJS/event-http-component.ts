import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// RxJS 임포트
import { Subscription, Observable, throwError } from 'rxjs';
import { debounceTime, switchMap, filter, map, tap, catchError } from 'rxjs/operators';

interface GithubUser {
    login: number;
    name: string;
}

@Component({
    selector: 'app-event-http-observable',
    template: `
    <h2>Observable Events</h2>
    <input type="text" placeholder="Enter github userid" [formControl]="searchInput">
    <pre>{{githubUser | json}}</pre>
  `
})
export class ObservableEventHttpComponent implements OnInit, OnDestroy {
    // ① Angular forms
    searchInput: FormControl = new FormControl();
    githubUser: GithubUser;
    subscription: Subscription;

    // ② 서버와의 통신을 위해 HttpClient를 의존성 주입한다.
    constructor(private http: HttpClient) { 

        // const interval = setInterval(() => console.log(this.githubUser), 2000);
    }

    ngOnInit() {
        // ① 폼 컨트롤 값의 상태를 옵저버블 스트림으로 수신한다.
        this.subscription = this.searchInput.valueChanges
            .pipe(
                filter(v => v.trim() !== ''),
                // ③ 옵저버블이 방출하는 데이터를 수신하는 시간을 지연시킨다.
                debounceTime(500),
                // ④ 새로운 옵저버블을 생성한다.
                switchMap((userId: string) => this.getGithubUser(userId)),
            )
            // ⑥ 옵저버블을 구독한다.
            .subscribe({
                next: user => this.githubUser = user,
                error: error => console.log(error)
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getGithubUser(userId: string): Observable<GithubUser> {
        return this.http
            .get<GithubUser>(`https://api.github.com/users/${userId}`)
            .pipe(
                map(user => ({ login: user.login, name: user.name })),
                tap(console.log),
                catchError(err => {
                    /*
                    if (err.status === 404) {
                        this.handleError(err);
                    } else {
                        this.handleError(err);
                    }
                    */
                    console.log(err);
                    return new Observable<null>();
                })
            )
    }

    private handleError(error: Response) {
        console.log(error);
        return throwError(() => error);
    }
}
