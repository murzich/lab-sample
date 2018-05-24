import { environment } from '../../environments/environment';

export class ApiUrls {
  static posts = `${environment.apiBase}/posts`;
  static users = `${environment.apiBase}/users`;
}
