export class ApiJokeModel {
  public success: Success;
  public contents: Contents;
}

export class Success {
  public total: number;
}

export class Contents {
  public jokes: Jokes;
  public copyright: string;
}

export class Jokes {
  public description: string;
  public language: string;
  public background: string;
  public category: string;
  public date: string;
  public joke: Joke;
}

export class Joke {
  public title: string;
  public lang: string;
  public length: number;
  public clean: number;
  public racial: number;
  public date: string;
  public id: string;
  public text: string;
}
