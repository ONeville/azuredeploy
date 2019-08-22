import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, baseUrl } from 'src/app/shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PullBasedOneService {
  user: User;

  constructor(private http: HttpClient) {}

  loadUser(id: string) {
    this.getUser(id).subscribe(user => {
      this.user = user;
    });
  }

  private getUser(id: string): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }
}
