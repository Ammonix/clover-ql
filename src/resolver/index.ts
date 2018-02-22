class Resolver {
  public boards(): any[] {
    return [{ board: "mu" }, { board: "fit" }];
  }
  public board(id: string) {}
}

export default new Resolver();
