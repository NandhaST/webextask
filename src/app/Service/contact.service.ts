import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Contact} from '../Model/Contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:8080/api/contact';

  constructor(private http: HttpClient) { }

  getContact(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createContact(Contact: Contact): Observable<Response> {
    return this.http.post<Response>(`${this.baseUrl}`, Contact)
  }


}
