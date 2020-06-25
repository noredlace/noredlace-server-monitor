export class ApiMinecraftModel {
  public hostname: string;
  public ip: string;
  public online: string;
  public motd: Motd;
  public players: Players;
  public port: number;
  public version: string;
}

export class Motd {
  public clean: string;
  public html: string;
  public raw: string;
}

export class Players {
  public max: number;
  public online: number;
  public list: string[];
}
