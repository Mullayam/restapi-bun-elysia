import { Elysia, } from "elysia";
 
export class ElysiaServer {
  private static readonly App: Elysia = new Elysia()
  constructor() { }

  ElysiaConfiguration() {

  }

  RegisterElysiaRoutes() {

  }
  static RunElysia(port: number = 7134) {
    this.App.listen(port, () => {
      process.stdout.write(`🦊 Elysia is running at ${this.App.server?.hostname}:${this.App.server?.port}`)
    });
  }
}

