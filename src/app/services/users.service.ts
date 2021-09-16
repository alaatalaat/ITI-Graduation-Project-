import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<any>('http://localhost:3001/users/').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteProduct(id: number) {
    return this.http.delete<any>('http://localhost:3001/users/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
