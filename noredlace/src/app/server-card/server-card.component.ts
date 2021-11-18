import { Component, OnInit } from '@angular/core';

import { ApiMinecraftService } from '../api-service/api-minecraft/api-minecraft.service';
import { ApiTerrariaService } from '../api-service/api-terraria/api-terraria.service';
import { ApiSdtdService } from '../api-service/api-sdtd/api-sdtd.service';
import { ApiDstService } from '../api-service/api-dst/api-dst.service';
import { ApiEmpyrionService } from '../api-service/api-empyrion/api-empyrion.service';
import { ApiTheForestService } from '../api-service/api-theforest/api-theforest.service';
import { ApiValheimService } from '../api-service/api-valheim/api-valheim.service';

import { ApiMinecraftModel } from '../api-model/api-minecraft/api-minecraft.model';
import { ApiTerrariaModel } from '../api-model/api-terraria/api-terraria.model';
import { ApiSdtdModel } from '../api-model/api-sdtd/api-sdtd.model';
import { ApiDstModel } from '../api-model/api-dst/api-dst.model';
import { ApiEmpyrionModel } from '../api-model/api-empyrion/api-empyrion.model';
import { ApiTheForestModel } from '../api-model/api-theforest/api-theforest.model';
import { ApiValheimModel } from '../api-model/api-valheim/api-valheim.model';

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
  apiEmpyrionModels$: ApiEmpyrionModel;
  apiTheForestModels$: ApiTheForestModel;
  apiValheimModels$: ApiValheimModel;

  constructor(private apiMinecraftService: ApiMinecraftService, private apiTerrariaService: ApiTerrariaService, private apiSdtdService: ApiSdtdService, private apiDstService: ApiDstService, private apiEmpyrionService: ApiEmpyrionService, private apiTheForestService: ApiTheForestService, private apiValheimService: ApiValheimService) { }

  ngOnInit() {

    this.getMinecraftStatus();

    this.getTerrariaStatus();

    this.getSdtdStatus();

    this.getDstStatus();

    this.getEmpyrionStatus();

    this.getTheForestStatus();

    this.getValheimStatus();



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

  getEmpyrionStatus() {
    this.apiEmpyrionService.getServerStatus()
      .subscribe(data => this.apiEmpyrionModels$ = data);
  }

  getTheForestStatus() {
    this.apiTheForestService.getServerStatus()
      .subscribe(data => this.apiTheForestModels$ = data);
  }

  getValheimStatus() {
    this.apiValheimService.getServerStatus()
      .subscribe(data => this.apiValheimModels$ = data);
  }

}
