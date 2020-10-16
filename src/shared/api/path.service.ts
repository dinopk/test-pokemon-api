import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class PathService {

  /**
   * @description endpoint for service api
   * @exemple nameApi: {target: 'nameApiSwagger'} or with group nameApi: { group: {nameApiChildren: {target: 'nameApiSwagger'}}}
   */
  private api: any = {
    cards: {target: 'cards'}
  };

  constructor() {
    this.api.endpoint = (environment.mock) ? 'mock' : environment.target;
  }

  /**
   * @example
   *
   *    const pathservice = new PathService ();
   *    let url = pathservice.getApi('account.group.login');
   *
   *    result:
   *    <api>/account/account/login
   */
  public getApi(endpoint: string, aditionalPath?: string[]): string {

    const listEndpoint = endpoint.split('.');
    let apisFiltered = Object.assign(this.api);
    let apiUrl = `${this.api.endpoint}`;

    for (const tagEndpoint of listEndpoint) {
      apisFiltered = apisFiltered[tagEndpoint];
      apiUrl += (apisFiltered.target) ? `/${apisFiltered.target}` : '';
    }

    if (aditionalPath) {
      aditionalPath.forEach(path => {
        apiUrl += `/${path}`;
      });
    }

    return apiUrl;
  }
}
