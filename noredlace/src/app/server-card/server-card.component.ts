import { Component, OnInit } from '@angular/core';

import { ApiGameServersService } from '../api-service/api-gameservers/api-gameservers.service';

import { ApiGameServersModel } from '../api-model/api-gameservers/api-gameservers.model';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.css']
})
export class ServerCardComponent implements OnInit {
  apiGameServersModels$: ApiGameServersModel;

  constructor(private apiGameServerService: ApiGameServersService) { }

  ngOnInit() {

    this.getGameServersStatus();

  }

  getGameServersStatus(){
    this.apiGameServerService.getServerStatus()
      .subscribe(data => this.apiGameServersModels$ = data);
  }

}
