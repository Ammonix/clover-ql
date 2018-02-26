export default class Loader {
  constructor(
    public load: Function = (): any => null,
    public loadMany: Function = (): any => null
  ) {}
}
