import { Component, OnInit } from '@angular/core';

import { ApiMinecraftService } from '../api-service/api-minecraft/api-minecraft.service';
import { ApiTerrariaService } from '../api-service/api-terraria/api-terraria.service';
import { ApiSdtdService } from '../api-service/api-sdtd/api-sdtd.service';
import { ApiDstService } from '../api-service/api-dst/api-dst.service';

import { ApiMinecraftModel } from '../api-model/api-minecraft/api-minecraft.model';
import { ApiTerrariaModel } from '../api-model/api-terraria/api-terraria.model';
import { ApiSdtdModel } from '../api-model/api-sdtd/api-sdtd.model';
import { ApiDstModel } from '../api-model/api-dst/api-dst.model';


@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.css']
})
export class ServerCardComponent implements OnInit {
  apiMinecraftModels$: ApiMinecraftModel;
  apiTerrariaModels$: ApiTerrariaModel;
  apiSdtdModels$: ApiSdtdModel;
  apiDstModels$: ApiDstModel;

  constructor(private apiMinecraftService: ApiMinecraftService, private apiTerrariaService: ApiTerrariaService, private apiSdtdService: ApiSdtdService, private apiDstService: ApiDstService) { }

  ngOnInit() {

    this.getMinecraftStatus();

    this.getTerrariaStatus();

    this.getSdtdStatus();

    this.getDstStatus();


    /*
    this.apiMinecraftService.getServerStatus()
        .subscribe(data => {
          this.apiMinecraftModels$ = data;
        });
  
    this.apiTerrariaService.getServerStatus()
      .subscribe(data => {
        this.apiTerrariaModels$ = data;
      });

    this.apiSdtdService.getServerStatus()
      .subscribe(data => {
        this.apiSdtdModels$ = data;
      });
    */
  }

  getMinecraftStatus() {
    this.apiMinecraftService.getServerStatus()
      .subscribe(data => this.apiMinecraftModels$ = data);
  }

  getTerrariaStatus() {
    this.apiTerrariaService.getServerStatus()
      .subscribe(data => this.apiTerrariaModels$ = data);
  }

  getSdtdStatus() {
    this.apiSdtdService.getServerStatus()
      .subscribe(data => this.apiSdtdModels$ = data);
  }

  getDstStatus() {
    this.apiDstService.getServerStatus()
      .subscribe(data => this.apiDstModels$ = data);
  }


}
