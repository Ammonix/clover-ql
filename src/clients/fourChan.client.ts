import * as rm from "typed-rest-client/RestClient";
import { map } from "rxjs/operators";
import { fromPromise } from "rxjs/observable/fromPromise";
import { Observable } from "rxjs/Observable";

class FourChanClient {
  private client: rm.RestClient;
  constructor() {
    this.client = new rm.RestClient("4chan-rest-api", "https://a.4cdn.org");
  }
  public get = <T>(resource: string): Observable<T> =>
    fromPromise(this.client.get<T>(resource)).pipe(
      map(response => response.result)
    );
}

export default new FourChanClient();
