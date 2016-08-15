import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

@Injectable()
export class EmployersService {

  constructor(private http: Http) {
  }

  getData() {
    return this.http.get('https://bh-emprs.firebaseio.com/employers.json')
      .map((response: Response) => response.json());
  }

  sendData(employer: any) {
    const body = JSON.stringify(employer);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://bh-emprs.firebaseio.com/employers.json', body, {
      headers: headers
    })
      .map((data: Response) => data.json())
  }

}
