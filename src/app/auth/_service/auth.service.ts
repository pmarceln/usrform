import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class AuthService {

  private tokenSubject: BehaviorSubject<string> =  new BehaviorSubject(null);
  public token$: Observable<string> = this.tokenSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const name = localStorage.getItem('name');
    const token = localStorage.getItem('token');

    if (name && token) {
      this.tokenSubject.next(token);
    }
  }

  public login(email: string, password: string): Observable<{ name: string, token: string }> {
      // return this.http.post<{ data: any }>('http://api.facem.graphics/api/login', { email, password });
      return of({ name: 'John Doe', token: 'sdsdsdsds'}).pipe(
        tap(
          (data) => {
            localStorage.setItem('name', JSON.stringify(data.name));
            localStorage.setItem('token', JSON.stringify(data.token));
            this.tokenSubject.next(data.token);
            this.router.navigateByUrl('/project');
          }
        )
    );
  }
}
