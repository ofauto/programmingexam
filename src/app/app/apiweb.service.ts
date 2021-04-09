import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiwebService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  public httpOptionsPost = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*'
      // 'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    }), Observable: 'response'
  };

  public ApiAddressMaster = 'https://apis-3015.lib.cmu.ac.th/exam/items';
  public ApiAddress = 'https://programmingexam-ofauto201445.codeanyapp.com/api/';

  public WebsiteAddress = 'https://programmingexam-ofauto201445.codeanyapp.com/';
  public ApiAddressAsset = 'https://programmingexam-ofauto201445.codeanyapp.com/api/assets/';
  public ApiAddressUpload = 'https://programmingexam-ofauto201445.codeanyapp.com/api/upload';
  public ApiAddressUploads = 'https://programmingexam-ofauto201445.codeanyapp.com/api/uploads';
  public FileURL = 'https://programmingexam-ofauto201445.codeanyapp.com/api/assets/';
  public WebsiteAddressAssets = 'https://programmingexam-ofauto201445.codeanyapp.com/api/assets/';
  public UploadApiAddress = 'https://programmingexam-ofauto201445.codeanyapp.com/api/upload';
  public CkuploadApiAddress = 'https://programmingexam-ofauto201445.codeanyapp.com/api/uploads';
  public CkeditorApiAddress = 'https://programmingexam-ofauto201445.codeanyapp.com/api/ckeditor/ckeditor.js';


  constructor(private http: HttpClient) { }

  public SearchCommand(): any{
    const datacommand = {query: {field: 'author', keyword: 'testsearch'}, filter: [], skip: 0, limit: 10};
    // noinspection TypeScriptValidateTypes
    // @ts-ignore
    return this.http.post(this.ApiAddress + 'Calldata.php', { query: {field: 'author', keyword: 'testsearch'}, filter: [], skip: 0, limit: 10} , this.httpOptionsPost);
  }
  public SearchCommandManual(data): any{
    return this.http.post(this.ApiAddress + 'Calldata.php', data , this.httpOptionsPost);
  }
  public SearchCommandManualGet(Id): any{
    return this.http.get('https://apis-3015.lib.cmu.ac.th/exam/items/' + Id );
  }



}
