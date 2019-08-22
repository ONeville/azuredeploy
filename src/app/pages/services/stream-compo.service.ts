import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, filter, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User, baseUrl } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class StreamCompoService {
  private userSubject = new BehaviorSubject<string>(null);

  user$ = this.userSubject.pipe(
    filter(Boolean),
    switchMap((id: string) => this.getUser(id)),
    shareReplay(1)
  );

  constructor(private http: HttpClient) {}

  loadUser(id: string) {
    this.userSubject.next(id);
  }

  private getUser(id: string): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }
}
