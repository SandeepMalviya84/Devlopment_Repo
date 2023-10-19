import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { PostModel,Table } from '././table';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 
  constructor(private http: HttpClient) { }

      getdata(): Observable<Array<PostModel>>{

      return this.http.get<Array<PostModel>>('https://jsonplaceholder.typicode.com/posts');
  }
  
}
