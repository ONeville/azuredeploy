import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, baseUrl } from 'src/app/shared/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PushBasedOneService {
  private userSubject = new BehaviorSubject<User>(null);
  readonly user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadUser(id: string) {
    this.getUser(id).subscribe(user => {
      this.userSubject.next(user);
    });
  }

  private getUser(id: string): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }
}
