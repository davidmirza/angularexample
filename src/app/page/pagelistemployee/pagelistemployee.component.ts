import { Component, OnInit,AfterViewInit } from '@angular/core';
import { storage } from 'src/app/utils/storage.component';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'app-pagelistemployee',
  templateUrl: './pagelistemployee.component.html',
  styleUrls: ['./pagelistemployee.component.scss']
})
export class PagelistemployeeComponent implements OnInit, AfterViewInit {
  UsrName : string = "";
  DefaultEntries=5;
  cbEntries: string="";
  dt: DataTables.Settings={};
  searchData:string="";
  Email="";
  IsEmailOk = false;
  EmailRegExp = "^([A-Za-z0-9_\\-\\.])+\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$";
  ListEmployee = {
    "total": 100, 
    "data": [
      {'Username':'TigerNixon','Firstname':'Tiger','Lastname':'Nixon','Email':'TigerNixon@gmail.com','BasicSalary':'320800','status':'Married','Group':'System Architect'},
  {'Username':'GarrettWinters','Firstname':'Garrett','Lastname':'Winters','Email':'GarrettWinters@gmail.com','BasicSalary':'170750','status':'Married','Group':'Accountant'},
  {'Username':'AshtonCox','Firstname':'Ashton','Lastname':'Cox','Email':'AshtonCox@gmail.com','BasicSalary':'86000','status':'Married','Group':'Junior Technical Author'},
  {'Username':'CedricKelly','Firstname':'Cedric','Lastname':'Kelly','Email':'CedricKelly@gmail.com','BasicSalary':'433060','status':'Married','Group':'Senior Javascript Developer'},
  {'Username':'AiriSatou','Firstname':'Airi','Lastname':'Satou','Email':'AiriSatou@gmail.com','BasicSalary':'162700','status':'Married','Group':'Accountant'},
  {'Username':'BrielleWilliamson','Firstname':'Brielle','Lastname':'Williamson','Email':'BrielleWilliamson@gmail.com','BasicSalary':'372000','status':'Married','Group':'Integration Specialist'},
  {'Username':'HerrodChandler','Firstname':'Herrod','Lastname':'Chandler','Email':'HerrodChandler@gmail.com','BasicSalary':'137500','status':'Married','Group':'Sales Assistant'},
  {'Username':'RhonaDavidson','Firstname':'Rhona','Lastname':'Davidson','Email':'RhonaDavidson@gmail.com','BasicSalary':'327900','status':'Married','Group':'Integration Specialist'},
  {'Username':'ColleenHurst','Firstname':'Colleen','Lastname':'Hurst','Email':'ColleenHurst@gmail.com','BasicSalary':'205500','status':'Married','Group':'Javascript Developer'},
  {'Username':'SonyaFrost','Firstname':'Sonya','Lastname':'Frost','Email':'SonyaFrost@gmail.com','BasicSalary':'103600','status':'Married','Group':'Software Engineer'},
  {'Username':'JenaGaines','Firstname':'Jena','Lastname':'Gaines','Email':'JenaGaines@gmail.com','BasicSalary':'90560','status':'Married','Group':'Office Manager'},
  {'Username':'QuinnFlynn','Firstname':'Quinn','Lastname':'Flynn','Email':'QuinnFlynn@gmail.com','BasicSalary':'342000','status':'Married','Group':'Support Lead'},
  {'Username':'ChardeMarshall','Firstname':'Charde','Lastname':'Marshall','Email':'ChardeMarshall@gmail.com','BasicSalary':'470600','status':'Married','Group':'Regional Director'},
  {'Username':'HaleyKennedy','Firstname':'Haley','Lastname':'Kennedy','Email':'HaleyKennedy@gmail.com','BasicSalary':'313500','status':'Married','Group':'Senior Marketing Designer'},
  {'Username':'TatyanaFitzpatrick','Firstname':'Tatyana','Lastname':'Fitzpatrick','Email':'TatyanaFitzpatrick@gmail.com','BasicSalary':'385750','status':'Married','Group':'Regional Director'},
  {'Username':'MichaelSilva','Firstname':'Michael','Lastname':'Silva','Email':'MichaelSilva@gmail.com','BasicSalary':'198500','status':'Married','Group':'Marketing Designer'},
  {'Username':'PaulByrd','Firstname':'Paul','Lastname':'Byrd','Email':'PaulByrd@gmail.com','BasicSalary':'725000','status':'Married','Group':'Chief Financial Officer (CFO)'},
  {'Username':'GloriaLittle','Firstname':'Gloria','Lastname':'Little','Email':'GloriaLittle@gmail.com','BasicSalary':'237500','status':'Married','Group':'Systems Administrator'},
  {'Username':'BradleyGreer','Firstname':'Bradley','Lastname':'Greer','Email':'BradleyGreer@gmail.com','BasicSalary':'132000','status':'Married','Group':'Software Engineer'},
  {'Username':'DaiRios','Firstname':'Dai','Lastname':'Rios','Email':'DaiRios@gmail.com','BasicSalary':'217500','status':'Married','Group':'Personnel Lead'},
  {'Username':'JenetteCaldwell','Firstname':'Jenette','Lastname':'Caldwell','Email':'JenetteCaldwell@gmail.com','BasicSalary':'345000','status':'Married','Group':'Development Lead'},
  {'Username':'YuriBerry','Firstname':'Yuri','Lastname':'Berry','Email':'YuriBerry@gmail.com','BasicSalary':'675000','status':'Single','Group':'Chief Marketing Officer (CMO)'},
  {'Username':'CaesarVance','Firstname':'Caesar','Lastname':'Vance','Email':'CaesarVance@gmail.com','BasicSalary':'106450','status':'Single','Group':'Pre-Sales Support'},
  {'Username':'DorisWilder','Firstname':'Doris','Lastname':'Wilder','Email':'DorisWilder@gmail.com','BasicSalary':'85600','status':'Single','Group':'Sales Assistant'},
  {'Username':'AngelicaRamos','Firstname':'Angelica','Lastname':'Ramos','Email':'AngelicaRamos@gmail.com','BasicSalary':'1200000','status':'Single','Group':'Chief Executive Officer (CEO)'},
  {'Username':'GavinJoyce','Firstname':'Gavin','Lastname':'Joyce','Email':'GavinJoyce@gmail.com','BasicSalary':'92575','status':'Single','Group':'Developer'},
  {'Username':'JenniferChang','Firstname':'Jennifer','Lastname':'Chang','Email':'JenniferChang@gmail.com','BasicSalary':'357650','status':'Single','Group':'Regional Director'},
  {'Username':'BrendenWagner','Firstname':'Brenden','Lastname':'Wagner','Email':'BrendenWagner@gmail.com','BasicSalary':'206850','status':'Single','Group':'Software Engineer'},
  {'Username':'FionaGreen','Firstname':'Fiona','Lastname':'Green','Email':'FionaGreen@gmail.com','BasicSalary':'850000','status':'Single','Group':'Chief Operating Officer (COO)'},
  {'Username':'ShouItou','Firstname':'Shou','Lastname':'Itou','Email':'ShouItou@gmail.com','BasicSalary':'163000','status':'Single','Group':'Regional Marketing'},
  {'Username':'MichelleHouse','Firstname':'Michelle','Lastname':'House','Email':'MichelleHouse@gmail.com','BasicSalary':'95400','status':'Single','Group':'Integration Specialist'},
  {'Username':'SukiBurks','Firstname':'Suki','Lastname':'Burks','Email':'SukiBurks@gmail.com','BasicSalary':'114500','status':'Single','Group':'Developer'},
  {'Username':'PrescottBartlett','Firstname':'Prescott','Lastname':'Bartlett','Email':'PrescottBartlett@gmail.com','BasicSalary':'145000','status':'Single','Group':'Technical Author'},
  {'Username':'GavinCortez','Firstname':'Gavin','Lastname':'Cortez','Email':'GavinCortez@gmail.com','BasicSalary':'235500','status':'Single','Group':'Team Leader'},
  {'Username':'MartenaMccray','Firstname':'Martena','Lastname':'Mccray','Email':'MartenaMccray@gmail.com','BasicSalary':'324050','status':'Single','Group':'Post-Sales support'},
  {'Username':'UnityButler','Firstname':'Unity','Lastname':'Butler','Email':'UnityButler@gmail.com','BasicSalary':'85675','status':'Single','Group':'Marketing Designer'},
  {'Username':'HowardHatfield','Firstname':'Howard','Lastname':'Hatfield','Email':'HowardHatfield@gmail.com','BasicSalary':'164500','status':'Single','Group':'Office Manager'},
  {'Username':'HopeFuentes','Firstname':'Hope','Lastname':'Fuentes','Email':'HopeFuentes@gmail.com','BasicSalary':'109850','status':'Single','Group':'Secretary'},
  {'Username':'VivianHarrell','Firstname':'Vivian','Lastname':'Harrell','Email':'VivianHarrell@gmail.com','BasicSalary':'452500','status':'Single','Group':'Financial Controller'},
  {'Username':'TimothyMooney','Firstname':'Timothy','Lastname':'Mooney','Email':'TimothyMooney@gmail.com','BasicSalary':'136200','status':'Single','Group':'Office Manager'},
  {'Username':'JacksonBradshaw','Firstname':'Jackson','Lastname':'Bradshaw','Email':'JacksonBradshaw@gmail.com','BasicSalary':'645750','status':'Single','Group':'Director'},
  {'Username':'OliviaLiang','Firstname':'Olivia','Lastname':'Liang','Email':'OliviaLiang@gmail.com','BasicSalary':'234500','status':'Single','Group':'Support Engineer'},
  {'Username':'BrunoNash','Firstname':'Bruno','Lastname':'Nash','Email':'BrunoNash@gmail.com','BasicSalary':'163500','status':'Single','Group':'Software Engineer'},
  {'Username':'SakuraYamamoto','Firstname':'Sakura','Lastname':'Yamamoto','Email':'SakuraYamamoto@gmail.com','BasicSalary':'139575','status':'Single','Group':'Support Engineer'},
  {'Username':'ThorWalton','Firstname':'Thor','Lastname':'Walton','Email':'ThorWalton@gmail.com','BasicSalary':'98540','status':'Single','Group':'Developer'},
  {'Username':'FinnCamacho','Firstname':'Finn','Lastname':'Camacho','Email':'FinnCamacho@gmail.com','BasicSalary':'87500','status':'Single','Group':'Support Engineer'},
  {'Username':'SergeBaldwin','Firstname':'Serge','Lastname':'Baldwin','Email':'SergeBaldwin@gmail.com','BasicSalary':'138575','status':'Single','Group':'Data Coordinator'},
  {'Username':'ZenaidaFrank','Firstname':'Zenaida','Lastname':'Frank','Email':'ZenaidaFrank@gmail.com','BasicSalary':'125250','status':'Single','Group':'Software Engineer'},
  {'Username':'ZoritaSerrano','Firstname':'Zorita','Lastname':'Serrano','Email':'ZoritaSerrano@gmail.com','BasicSalary':'115000','status':'Single','Group':'Software Engineer'},
  {'Username':'JenniferAcosta','Firstname':'Jennifer','Lastname':'Acosta','Email':'JenniferAcosta@gmail.com','BasicSalary':'75650','status':'Single','Group':'Junior Javascript Developer'},
  {'Username':'CaraStevens','Firstname':'Cara','Lastname':'Stevens','Email':'CaraStevens@gmail.com','BasicSalary':'145600','status':'Single','Group':'Sales Assistant'},
  {'Username':'HermioneButler','Firstname':'Hermione','Lastname':'Butler','Email':'HermioneButler@gmail.com','BasicSalary':'356250','status':'Single','Group':'Regional Director'},
  {'Username':'LaelGreer','Firstname':'Lael','Lastname':'Greer','Email':'LaelGreer@gmail.com','BasicSalary':'103500','status':'Single','Group':'Systems Administrator'},
  {'Username':'JonasAlexander','Firstname':'Jonas','Lastname':'Alexander','Email':'JonasAlexander@gmail.com','BasicSalary':'86500','status':'Single','Group':'Developer'},
  {'Username':'ShadDecker','Firstname':'Shad','Lastname':'Decker','Email':'ShadDecker@gmail.com','BasicSalary':'183000','status':'Single','Group':'Regional Director'},
  {'Username':'MichaelBruce','Firstname':'Michael','Lastname':'Bruce','Email':'MichaelBruce@gmail.com','BasicSalary':'183000','status':'Single','Group':'Javascript Developer'},
  {'Username':'DonnaSnider','Firstname':'Donna','Lastname':'Snider','Email':'DonnaSnider@gmail.com','BasicSalary':'112000','status':'Single','Group':'Customer Support'},
  {'Username':'GarrettKelly','Firstname':'Garrett','Lastname':'Kelly','Email':'GarrettKelly@gmail.com','BasicSalary':'170750','status':'Married','Group':'Junior Technical Author'},
  {'Username':'AshtonSatou','Firstname':'Ashton','Lastname':'Satou','Email':'AshtonSatou@gmail.com','BasicSalary':'86000','status':'Married','Group':'Senior Javascript Developer'},
  {'Username':'CedricWilliamson','Firstname':'Cedric','Lastname':'Williamson','Email':'CedricWilliamson@gmail.com','BasicSalary':'433060','status':'Married','Group':'Accountant'},
  {'Username':'AiriChandler','Firstname':'Airi','Lastname':'Chandler','Email':'AiriChandler@gmail.com','BasicSalary':'162700','status':'Married','Group':'Integration Specialist'},
  {'Username':'BrielleDavidson','Firstname':'Brielle','Lastname':'Davidson','Email':'BrielleDavidson@gmail.com','BasicSalary':'372000','status':'Married','Group':'Sales Assistant'},
  {'Username':'HerrodHurst','Firstname':'Herrod','Lastname':'Hurst','Email':'HerrodHurst@gmail.com','BasicSalary':'137500','status':'Married','Group':'Integration Specialist'},
  {'Username':'RhonaFrost','Firstname':'Rhona','Lastname':'Frost','Email':'RhonaFrost@gmail.com','BasicSalary':'327900','status':'Married','Group':'Javascript Developer'},
  {'Username':'ColleenGaines','Firstname':'Colleen','Lastname':'Gaines','Email':'ColleenGaines@gmail.com','BasicSalary':'205500','status':'Married','Group':'Software Engineer'},
  {'Username':'SonyaFlynn','Firstname':'Sonya','Lastname':'Flynn','Email':'SonyaFlynn@gmail.com','BasicSalary':'103600','status':'Single','Group':'Office Manager'},
  {'Username':'JenaMarshall','Firstname':'Jena','Lastname':'Marshall','Email':'JenaMarshall@gmail.com','BasicSalary':'90560','status':'Single','Group':'Support Lead'},
  {'Username':'QuinnKennedy','Firstname':'Quinn','Lastname':'Kennedy','Email':'QuinnKennedy@gmail.com','BasicSalary':'342000','status':'Single','Group':'Regional Director'},
  {'Username':'ChardeFitzpatrick','Firstname':'Charde','Lastname':'Fitzpatrick','Email':'ChardeFitzpatrick@gmail.com','BasicSalary':'470600','status':'Single','Group':'Senior Marketing Designer'},
  {'Username':'HaleySilva','Firstname':'Haley','Lastname':'Silva','Email':'HaleySilva@gmail.com','BasicSalary':'313500','status':'Single','Group':'Regional Director'},
  {'Username':'TatyanaByrd','Firstname':'Tatyana','Lastname':'Byrd','Email':'TatyanaByrd@gmail.com','BasicSalary':'385750','status':'Single','Group':'Marketing Designer'},
  {'Username':'MichaelLittle','Firstname':'Michael','Lastname':'Little','Email':'MichaelLittle@gmail.com','BasicSalary':'198500','status':'Single','Group':'Chief Financial Officer (CFO)'},
  {'Username':'PaulGreer','Firstname':'Paul','Lastname':'Greer','Email':'PaulGreer@gmail.com','BasicSalary':'725000','status':'Single','Group':'Systems Administrator'},
  {'Username':'GloriaRios','Firstname':'Gloria','Lastname':'Rios','Email':'GloriaRios@gmail.com','BasicSalary':'237500','status':'Single','Group':'Software Engineer'},
  {'Username':'BradleyCaldwell','Firstname':'Bradley','Lastname':'Caldwell','Email':'BradleyCaldwell@gmail.com','BasicSalary':'132000','status':'Single','Group':'Personnel Lead'},
  {'Username':'DaiBerry','Firstname':'Dai','Lastname':'Berry','Email':'DaiBerry@gmail.com','BasicSalary':'217500','status':'Single','Group':'Development Lead'},
  {'Username':'JenetteVance','Firstname':'Jenette','Lastname':'Vance','Email':'JenetteVance@gmail.com','BasicSalary':'345000','status':'Single','Group':'Chief Marketing Officer (CMO)'},
  {'Username':'YuriWilder','Firstname':'Yuri','Lastname':'Wilder','Email':'YuriWilder@gmail.com','BasicSalary':'675000','status':'Single','Group':'Pre-Sales Support'},
  {'Username':'CaesarRamos','Firstname':'Caesar','Lastname':'Ramos','Email':'CaesarRamos@gmail.com','BasicSalary':'106450','status':'Single','Group':'Sales Assistant'},
  {'Username':'DorisJoyce','Firstname':'Doris','Lastname':'Joyce','Email':'DorisJoyce@gmail.com','BasicSalary':'85600','status':'Single','Group':'Chief Executive Officer (CEO)'},
  {'Username':'AngelicaChang','Firstname':'Angelica','Lastname':'Chang','Email':'AngelicaChang@gmail.com','BasicSalary':'1200000','status':'Single','Group':'Developer'},
  {'Username':'GavinWagner','Firstname':'Gavin','Lastname':'Wagner','Email':'GavinWagner@gmail.com','BasicSalary':'92575','status':'Single','Group':'Regional Director'},
  {'Username':'JenniferGreen','Firstname':'Jennifer','Lastname':'Green','Email':'JenniferGreen@gmail.com','BasicSalary':'357650','status':'Single','Group':'Software Engineer'},
  {'Username':'BrendenItou','Firstname':'Brenden','Lastname':'Itou','Email':'BrendenItou@gmail.com','BasicSalary':'206850','status':'Single','Group':'Chief Operating Officer (COO)'},
  {'Username':'FionaHouse','Firstname':'Fiona','Lastname':'House','Email':'FionaHouse@gmail.com','BasicSalary':'850000','status':'Single','Group':'Regional Marketing'},
  {'Username':'ShouBurks','Firstname':'Shou','Lastname':'Burks','Email':'ShouBurks@gmail.com','BasicSalary':'163000','status':'Single','Group':'Integration Specialist'},
  {'Username':'MichelleBartlett','Firstname':'Michelle','Lastname':'Bartlett','Email':'MichelleBartlett@gmail.com','BasicSalary':'95400','status':'Single','Group':'Developer'},
  {'Username':'SukiCortez','Firstname':'Suki','Lastname':'Cortez','Email':'SukiCortez@gmail.com','BasicSalary':'114500','status':'Single','Group':'Technical Author'},
  {'Username':'PrescottMccray','Firstname':'Prescott','Lastname':'Mccray','Email':'PrescottMccray@gmail.com','BasicSalary':'145000','status':'Single','Group':'Team Leader'},
  {'Username':'GavinButler','Firstname':'Gavin','Lastname':'Butler','Email':'GavinButler@gmail.com','BasicSalary':'235500','status':'Single','Group':'Post-Sales support'},
  {'Username':'MartenaHatfield','Firstname':'Martena','Lastname':'Hatfield','Email':'MartenaHatfield@gmail.com','BasicSalary':'324050','status':'Single','Group':'Marketing Designer'},
  {'Username':'UnityFuentes','Firstname':'Unity','Lastname':'Fuentes','Email':'UnityFuentes@gmail.com','BasicSalary':'85675','status':'Single','Group':'Office Manager'},
  {'Username':'HowardHarrell','Firstname':'Howard','Lastname':'Harrell','Email':'HowardHarrell@gmail.com','BasicSalary':'164500','status':'Single','Group':'Secretary'},
  {'Username':'HopeMooney','Firstname':'Hope','Lastname':'Mooney','Email':'HopeMooney@gmail.com','BasicSalary':'109850','status':'Single','Group':'Financial Controller'},
  {'Username':'VivianBradshaw','Firstname':'Vivian','Lastname':'Bradshaw','Email':'VivianBradshaw@gmail.com','BasicSalary':'452500','status':'Single','Group':'Office Manager'},
  {'Username':'TimothyLiang','Firstname':'Timothy','Lastname':'Liang','Email':'TimothyLiang@gmail.com','BasicSalary':'136200','status':'Single','Group':'Director'},
  {'Username':'JacksonNash','Firstname':'Jackson','Lastname':'Nash','Email':'JacksonNash@gmail.com','BasicSalary':'645750','status':'Single','Group':'Support Engineer'},
  {'Username':'OliviaYamamoto','Firstname':'Olivia','Lastname':'Yamamoto','Email':'OliviaYamamoto@gmail.com','BasicSalary':'234500','status':'Single','Group':'Software Engineer'},
  {'Username':'BrunoWalton','Firstname':'Bruno','Lastname':'Walton','Email':'BrunoWalton@gmail.com','BasicSalary':'163500','status':'Single','Group':'Support Engineer'},
  {'Username':'SakuraCamacho','Firstname':'Sakura','Lastname':'Camacho','Email':'SakuraCamacho@gmail.com','BasicSalary':'139575','status':'Single','Group':'Developer'},
  
    ]
  };
  modalInput= false;
  today: string="";
  constructor(
    private LocalStorage: storage,
    private Router_:Router,
    
  ){

  }
  dateToDDMMYYYY(date: Date) {
    var add = (( date.getMonth() + 1)>9)?'':'0';
    var addDay =  (( date.getDate())>9)?'':'0';
    return `${date.getFullYear()}-`+add+`${date.getMonth() + 1}-`+addDay+`${date.getDate()}`;
}
  ngOnInit(): void {
    this.CheckLogin();
    this.today = this.dateToDDMMYYYY(new Date());
     this.dt = {
      lengthChange: false,
      searching:false,
      data:this.ListEmployee.data ,
      pageLength:this.DefaultEntries,
    
      columns:
                  [
                    { "data": "Username" },
                    { "data": "Firstname" },
                    { "data": "Lastname" },
                    { "data": "Email" },
                    { "data": "Group" },
                    { "data": "status" },
                    { "data": "BasicSalary"},
                    {
                      data: null,
                      className: 'alert-edit',
                      defaultContent: '<button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Edit</button>',
                      orderable: false
                  },
                  {
                      data: null,
                      className: 'alert-delete',
                      defaultContent: '<button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Delete</button>',
                      orderable: false
                  }
                  ]
    }
    $('#tbl-data').on('click','td.alert-edit',function(e){
      console.log(e)
      Swal.fire({
        title:'Are you sure?',
        text: 'You want to Edit it',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#c4f013',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Update it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Updated ',
            'Your file has been Update',
            'success'
          )
        }
      })
    });
    $('#tbl-data').on('click','td.alert-delete',function(e){
      Swal.fire({
        title:'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted ',
            'Your file has been Delete',
            'success'
          )
        }
      })
    });
  }
  ngAfterViewInit(): void {
    
  }
  showModal(modal:boolean){
    this.modalInput = modal;
  }
  refreshData(){
    var tmpData: any = [] ;
    if(this.searchData!=""){
      tmpData = this.ListEmployee.data.filter((tmp) => tmp.Username.includes(this.searchData) || tmp.Email.includes(this.searchData) || tmp.Firstname.includes(this.searchData) || tmp.Group.includes(this.searchData) || tmp.Lastname.includes(this.searchData) || tmp.status.includes(this.searchData) || tmp.BasicSalary.includes(this.searchData));
    }
    else{
      tmpData = this.ListEmployee.data;
    }
       var datatable = $('#tbl-data').DataTable();
       datatable.destroy();
       $('#tbl-data').DataTable({
        lengthChange: false,
        searching:false,
        pageLength:this.DefaultEntries,
        data:tmpData,
        columns:
                  [
                    { "data": "Username" },
                    { "data": "Firstname" },
                    { "data": "Lastname" },
                    { "data": "Email" },
                    { "data": "Group" },
                    { "data": "status" },
                    { "data": "BasicSalary"},
                    {
                      data: "username",
                      className: 'alert-edit',
                      defaultContent: '<button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Edit</button>',
                      orderable: false
                  },
                  {
                      data: null,
                      className: 'alert-delete',
                      defaultContent: '<button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Delete</button>',
                      orderable: false
                  }
                  ]
      });
      $('#tbl-data').on('click','td.alert-edit',function(e){
        Swal.fire({
          title:'Are you sure?',
          text: 'You want to Edit it',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#c4f013',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Updated ',
              'Your file has been Update',
              'success'
            )
          }
        })
      });
      $('#tbl-data').on('click','td.alert-delete',function(e){
        Swal.fire({
          title:'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'error',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted ',
              'Your file has been Delete',
              'success'
            )
          }
        })
      });
     
  }
  CheckLogin(){
    var dtUser = this.LocalStorage.getUser('Username');
    if(!dtUser){
      this.Router_.navigate(['/Login']);
    }
    else{
      this.UsrName = dtUser;
    }
  }
  LogOut(){
    this.LocalStorage.logout();
    this.CheckLogin();
  }
  ChangeEntries(){
    console.log(this.DefaultEntries);
    var datatable = $('#tbl-data').DataTable();
    datatable.destroy();
    $('#tbl-data').DataTable({
      lengthChange: false,
      searching:false,
      pageLength:this.DefaultEntries
    })
     
  }
  dataSearch(){
    console.log(this.searchData);
    this.refreshData();
  }
  onEmail(event: any){
    console.log(event)
    var data = event;
    if (data != undefined || data!='') {
        let match = data.match(this.EmailRegExp);
        if (match == null) {
          this.IsEmailOk = true;
        }
        else{
          this.IsEmailOk = false;
        }
    }
  }
  alert(Edit:boolean){
    Swal.fire({
      title:'Are you sure?',
      text: (Edit) ? 'You want to Edit it': "You won't be able to revert this!",
      icon: (Edit) ? 'warning': 'error',
      showCancelButton: true,
      confirmButtonColor:(Edit) ? '#c4f013':  '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText:(Edit) ? 'Yes, Update it!': 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          (Edit) ? 'Updated ':'Deleted!',
          'Your file has been '+(Edit) ? 'Update':'Delete',
          'success'
        )
      }
    })
  }
}
