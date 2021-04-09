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

  public ApiAddress = 'https://apis-3015.lib.cmu.ac.th/exam/items';
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
    return this.http.post(this.ApiAddress,{ query: {field: 'author', keyword: 'testsearch'}, filter: [], skip: 0, limit: 10} , this.httpOptionsPost);
  }







  public login(data): any {
    return this.http.post(this.ApiAddress + 'users/login', data , this.httpOptionsPost);
  }

  public authlogin(username, password): any {
    return this.http.post(this.ApiAddress + 'users/login', {Action: 'login', ausername: username, apassword: password} , this.httpOptionsPost);
  }
// ตั้งค่าเครื่องมือ ปรับแต่งเนื้อหา
  public ConfigEditor4(apiupload, path): any {
    const EditorConfig = {
      // filebrowserBrowseUrl: apiupload + '?path=' + path,
      // filebrowserImageBrowseUrl: apiupload + '?path=' + path,
      filebrowserUploadUrl: apiupload + '?path=' + path,
      filebrowserImageUploadUrl: apiupload + '?path=' + path,
      sanitize : true
    };
    return EditorConfig;
  }

  ////////////////////////////// Front Office /////////////////////////

  public GetDataManual(datatype, command, fieldid, Id): any {
    return this.http.get(this.ApiAddress + datatype + '/' + command + '?' + fieldid + '=' + Id );
  }

  public GetDataIdManual(datatype, fieldid, Id): any {
    return this.http.get(this.ApiAddress + datatype + '/get_id?' + fieldid + '=' + Id );
  }

  public CallData(path, command): any{
    return this.http.get(this.ApiAddress + path + '/' + command);
  }
  ////////////////////////////// Dashboard /////////////////////////


  public getdatatable(datatype, typecall): any {
    return this.http.get(this.ApiAddress + datatype + '/' + typecall );
  }

  public CallDataManuals(ContentTypes, CallCommand, FeildId , ValueId ): any {
    return this.http.get(this.ApiAddress + ContentTypes + '/' + CallCommand + '?' + FeildId + '=' + ValueId );
  }

  // archive
  public GetDataNewsMuseumId(): any{
    return this.http.get(this.ApiAddress + 'museum/get_newmuseumid');
  }



  public GetDataId(datatype, Id): any {
    if (datatype === 'museumtypeitem' || datatype === 'museumgroupuse' || datatype === 'museumgrouptype' || datatype === 'museumtypeitemuse' || datatype === 'museumlocationstore' || datatype === 'museumtypetechnic'){
      return this.http.get(this.ApiAddress + datatype + '/get_id?' + Id );
    }else {
      return this.http.get(this.ApiAddress + datatype + '/get_id?Id=' + Id );
    }
  }

  public GetNewDataId(datatype, Action): any {
    return this.http.get(this.ApiAddress + datatype + '/get_newid?Action=' + Action );
    // return this.http.post(this.ApiAddress + datatype + '/' + datacommand , data , this.httpOptionsPost);
  }



  public DashboardCommand(datatype, datacommand, data): any {
    return this.http.post(this.ApiAddress + datatype + '/' + datacommand , data , this.httpOptionsPost);
  }
/////////////////////////////////////////////////

  // บริหารจัดการข้อมูลเมนู
  CallAllMainmenuFaculty(): any {
    return this.http.get(this.ApiAddress + 'mainmenu/get_all' );
  }
  CommandManageMainmenu(data): any {
    return this.http.post( this.ApiAddress + 'mainmenu/set_menu', data, this.httpOptionsPost);
  }
  CallMainmenuFacultyId(Id): any {
    return this.http.get(this.ApiAddress + 'mainmenu/get_id?Id=' + Id );
  }
  CommandManageMainMenuSortRank(data): any {
    return this.http.post( this.ApiAddress + 'mainmenu/set_mainmenurank', data, this.httpOptionsPost);
  }
  CommandManageSubMainMenuSortRank(data): any {
    return this.http.post( this.ApiAddress + 'mainmenu/set_submainmenurank', data, this.httpOptionsPost);
  }
  // บริหารจัดการข้อมูลเมนู iconservices
  CallAllMainmenuiconservicesFaculty(): any {
    return this.http.get(this.ApiAddress + 'mainmenuiconservices/get_all' );
  }
  CommandManageMainmenuiconservices(data): any {
    return this.http.post( this.ApiAddress + 'mainmenuiconservices/set_menu', data, this.httpOptionsPost);
  }
  CallMainmenuiconservicesFacultyId(Id): any {
    return this.http.get(this.ApiAddress + 'mainmenuiconservices/get_id?Id=' + Id );
  }
  CommandManageMainMenuiconservicesSortRank(data): any {
    return this.http.post( this.ApiAddress + 'mainmenuiconservices/set_mainmenurank', data, this.httpOptionsPost);
  }
  CommandManageSubMainMenuiconservicesSortRank(data): any {
    return this.http.post( this.ApiAddress + 'mainmenuiconservices/set_submainmenurank', data, this.httpOptionsPost);
  }
}
