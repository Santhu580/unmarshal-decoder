import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Response} from 'src/app/core/models/response'
import{FetchService} from 'src/app/core/services/fetch.service'


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private Serve:FetchService) { }
  id:any
  coin:any 
  responses: Response
  ngOnInit(): void {
  }

  clicked()
  {
    this.Serve.sendata(this.id,this.coin).subscribe(data => {
        this.responses = new Response()
        this.responses.id = data.id
        this.responses.from = data.from
        this.responses.to = data.to
        this.responses.fee = data.fee
        this.responses.date = data.date
        this.responses.status = data.status
        this.responses.value = data.value
        this.responses.type = data.type
   })
  }

}
