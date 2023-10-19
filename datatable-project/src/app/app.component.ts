import { Component, OnInit } from '@angular/core';
import { DataserviceService} from './dataservice.service';
import { PostModel,Table } from '././table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'datatable-project';
  dtOptions: any = {};
  newdata:any;
  post:any;
  //newdata: Array<PostModel>;

    model:Table =  new Table();
    public empData?: Object;
    public temp: Object=false;

  constructor(private dataservice: DataserviceService) { }

  ngOnInit(){
    
    this.dtOptions = {
     // ajax: 'data/data.json',
      columns: [{
        title: 'id',
        data: 'id'
      }, {
        title: 'title',
        data: 'title'
      }, {
        title: 'body',
        data: 'body',
        class: 'none'
      }],
      // Use this attribute to enable the responsive extension
      responsive: true,

    };
     this.dataservice.getdata().subscribe((res:any)=>{
      this.newdata=res;
      console.log(res) 
        this.temp = true;
      
      })
    
    };
    
}

