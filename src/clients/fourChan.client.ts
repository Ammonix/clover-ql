import fetch from "node-fetch";
class FourChanClient {
  private BASE_URL: string = "https://a.4cdn.org";
  public getJSONFromRelativeURL = <T>(relativeURL: string): Promise<T> =>
    fetch(`${this.BASE_URL}${relativeURL}`).then<T>(response =>
      response.json()
    );
}

export default new FourChanClient();
