import { Component } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import {createWorker} from 'tesseract.js';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ToastController } from '@ionic/angular';
import { stringify } from '@angular/compiler/src/util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


const {Camera} =Plugins;
class Port {
  public id: number;
  public name: string;
  public value:string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ports: Port[];
  port: Port;
  image="https://tesseract.projectnaptha.com/img/eng_bw.png";
  ocrResult='';
  selectedLanguage='eng';
  upperCap=false;
  num=0;
  disablingButton=false;






  




  worker: Tesseract.Worker;
  workerReady=false;
  captureProgress=0;
  // Launguage Specific workers, captureProgress
  
  



//Afrikaans
isLoaded_afr=false;worker_afr: Tesseract.Worker;async loadWorker_afr(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_afr = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_afr.load();await this.worker_afr.loadLanguage('afr');await this.worker_afr.initialize('afr').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_afr=true;}


//Arabic
isLoaded_ara=false;worker_ara: Tesseract.Worker;async loadWorker_ara(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_ara = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_ara.load();await this.worker_ara.loadLanguage('ara');await this.worker_ara.initialize('ara').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_ara=true;}


//Azerbaijani
isLoaded_aze=false;worker_aze: Tesseract.Worker;async loadWorker_aze(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_aze = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_aze.load();await this.worker_aze.loadLanguage('aze');await this.worker_aze.initialize('aze').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_aze=true;}


//Belarusian
isLoaded_bel=false;worker_bel: Tesseract.Worker;async loadWorker_bel(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_bel = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_bel.load();await this.worker_bel.loadLanguage('bel');await this.worker_bel.initialize('bel').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_bel=true;}


//Bengali
isLoaded_ben=false;worker_ben: Tesseract.Worker;async loadWorker_ben(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_ben = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_ben.load();await this.worker_ben.loadLanguage('ben');await this.worker_ben.initialize('ben').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_ben=true;}


//Bulgarian
isLoaded_bul=false;worker_bul: Tesseract.Worker;async loadWorker_bul(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_bul = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_bul.load();await this.worker_bul.loadLanguage('bul');await this.worker_bul.initialize('bul').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_bul=true;}


//Catalan
isLoaded_cat=false;worker_cat: Tesseract.Worker;async loadWorker_cat(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_cat = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_cat.load();await this.worker_cat.loadLanguage('cat');await this.worker_cat.initialize('cat').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_cat=true;}


//Czech
isLoaded_ces=false;worker_ces: Tesseract.Worker;async loadWorker_ces(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_ces = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_ces.load();await this.worker_ces.loadLanguage('ces');await this.worker_ces.initialize('ces').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_ces=true;}


//Chinese
isLoaded_chi_sim=false;worker_chi_sim: Tesseract.Worker;async loadWorker_chi_sim(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_chi_sim = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_chi_sim.load();await this.worker_chi_sim.loadLanguage('chi_sim');await this.worker_chi_sim.initialize('chi_sim').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_chi_sim=true;}


//Traditional Chinese
isLoaded_chi_tra=false;worker_chi_tra: Tesseract.Worker;async loadWorker_chi_tra(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_chi_tra = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_chi_tra.load();await this.worker_chi_tra.loadLanguage('chi_tra');await this.worker_chi_tra.initialize('chi_tra').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_chi_tra=true;}


//Cherokee
isLoaded_chr=false;worker_chr: Tesseract.Worker;async loadWorker_chr(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_chr = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_chr.load();await this.worker_chr.loadLanguage('chr');await this.worker_chr.initialize('chr').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_chr=true;}


//Danish
isLoaded_dan=false;worker_dan: Tesseract.Worker;async loadWorker_dan(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_dan = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_dan.load();await this.worker_dan.loadLanguage('dan');await this.worker_dan.initialize('dan').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_dan=true;}


//German
isLoaded_deu=false;worker_deu: Tesseract.Worker;async loadWorker_deu(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_deu = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_deu.load();await this.worker_deu.loadLanguage('deu');await this.worker_deu.initialize('deu').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_deu=true;}


//Greek
isLoaded_ell=false;worker_ell: Tesseract.Worker;async loadWorker_ell(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_ell = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_ell.load();await this.worker_ell.loadLanguage('ell');await this.worker_ell.initialize('ell').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_ell=true;}


//English
isLoaded_eng=false;worker_eng: Tesseract.Worker;async loadWorker_eng(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_eng = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_eng.load();await this.worker_eng.loadLanguage('eng');await this.worker_eng.initialize('eng').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_eng=true;}


//English (Old)
isLoaded_enm=false;worker_enm: Tesseract.Worker;async loadWorker_enm(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_enm = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_enm.load();await this.worker_enm.loadLanguage('enm');await this.worker_enm.initialize('enm').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_enm=true;}


//Internet Meme
isLoaded_meme=false;worker_meme: Tesseract.Worker;async loadWorker_meme(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_meme = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_meme.load();await this.worker_meme.loadLanguage('meme');await this.worker_meme.initialize('meme').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_meme=true;}


//Esperanto
isLoaded_epo=false;worker_epo: Tesseract.Worker;async loadWorker_epo(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_epo = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_epo.load();await this.worker_epo.loadLanguage('epo');await this.worker_epo.initialize('epo').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_epo=true;}


//Esperanto alternative
isLoaded_epo_alt=false;worker_epo_alt: Tesseract.Worker;async loadWorker_epo_alt(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_epo_alt = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_epo_alt.load();await this.worker_epo_alt.loadLanguage('epo_alt');await this.worker_epo_alt.initialize('epo_alt').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_epo_alt=true;}


//Math
isLoaded_equ=false;worker_equ: Tesseract.Worker;async loadWorker_equ(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_equ = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_equ.load();await this.worker_equ.loadLanguage('equ');await this.worker_equ.initialize('equ').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_equ=true;}


//Estonian
isLoaded_est=false;worker_est: Tesseract.Worker;async loadWorker_est(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_est = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_est.load();await this.worker_est.loadLanguage('est');await this.worker_est.initialize('est').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_est=true;}


//Basque
isLoaded_eus=false;worker_eus: Tesseract.Worker;async loadWorker_eus(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_eus = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_eus.load();await this.worker_eus.loadLanguage('eus');await this.worker_eus.initialize('eus').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_eus=true;}


//Finnish
isLoaded_fin=false;worker_fin: Tesseract.Worker;async loadWorker_fin(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_fin = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_fin.load();await this.worker_fin.loadLanguage('fin');await this.worker_fin.initialize('fin').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_fin=true;}


//French
isLoaded_fra=false;worker_fra: Tesseract.Worker;async loadWorker_fra(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_fra = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_fra.load();await this.worker_fra.loadLanguage('fra');await this.worker_fra.initialize('fra').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_fra=true;}


//Frankish
isLoaded_frk=false;worker_frk: Tesseract.Worker;async loadWorker_frk(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_frk = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_frk.load();await this.worker_frk.loadLanguage('frk');await this.worker_frk.initialize('frk').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_frk=true;}


//French (Old)
isLoaded_frm=false;worker_frm: Tesseract.Worker;async loadWorker_frm(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_frm = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_frm.load();await this.worker_frm.loadLanguage('frm');await this.worker_frm.initialize('frm').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_frm=true;}


//Galician
isLoaded_glg=false;worker_glg: Tesseract.Worker;async loadWorker_glg(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_glg = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_glg.load();await this.worker_glg.loadLanguage('glg');await this.worker_glg.initialize('glg').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_glg=true;}


//Ancient Greek
isLoaded_grc=false;worker_grc: Tesseract.Worker;async loadWorker_grc(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_grc = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_grc.load();await this.worker_grc.loadLanguage('grc');await this.worker_grc.initialize('grc').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_grc=true;}


//Hebrew
isLoaded_heb=false;worker_heb: Tesseract.Worker;async loadWorker_heb(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_heb = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_heb.load();await this.worker_heb.loadLanguage('heb');await this.worker_heb.initialize('heb').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_heb=true;}


//Hindi
isLoaded_hin=false;worker_hin: Tesseract.Worker;async loadWorker_hin(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_hin = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_hin.load();await this.worker_hin.loadLanguage('hin');await this.worker_hin.initialize('hin').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_hin=true;}


//Croatian
isLoaded_hrv=false;worker_hrv: Tesseract.Worker;async loadWorker_hrv(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_hrv = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_hrv.load();await this.worker_hrv.loadLanguage('hrv');await this.worker_hrv.initialize('hrv').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_hrv=true;}


//Hungarian
isLoaded_hun=false;worker_hun: Tesseract.Worker;async loadWorker_hun(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_hun = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_hun.load();await this.worker_hun.loadLanguage('hun');await this.worker_hun.initialize('hun').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_hun=true;}


//Indonesian
isLoaded_ind=false;worker_ind: Tesseract.Worker;async loadWorker_ind(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_ind = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_ind.load();await this.worker_ind.loadLanguage('ind');await this.worker_ind.initialize('ind').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_ind=true;}


//Icelandic
isLoaded_isl=false;worker_isl: Tesseract.Worker;async loadWorker_isl(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_isl = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_isl.load();await this.worker_isl.loadLanguage('isl');await this.worker_isl.initialize('isl').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_isl=true;}


//Italian
isLoaded_ita=false;worker_ita: Tesseract.Worker;async loadWorker_ita(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_ita = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_ita.load();await this.worker_ita.loadLanguage('ita');await this.worker_ita.initialize('ita').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_ita=true;}


//Italian (Old)
isLoaded_ita_old=false;worker_ita_old: Tesseract.Worker;async loadWorker_ita_old(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_ita_old = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_ita_old.load();await this.worker_ita_old.loadLanguage('ita_old');await this.worker_ita_old.initialize('ita_old').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_ita_old=true;}


//Japanese
isLoaded_jpn=false;worker_jpn: Tesseract.Worker;async loadWorker_jpn(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_jpn = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_jpn.load();await this.worker_jpn.loadLanguage('jpn');await this.worker_jpn.initialize('jpn').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_jpn=true;}


//Kannada
isLoaded_kan=false;worker_kan: Tesseract.Worker;async loadWorker_kan(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_kan = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_kan.load();await this.worker_kan.loadLanguage('kan');await this.worker_kan.initialize('kan').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_kan=true;}


//Korean
isLoaded_kor=false;worker_kor: Tesseract.Worker;async loadWorker_kor(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_kor = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_kor.load();await this.worker_kor.loadLanguage('kor');await this.worker_kor.initialize('kor').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_kor=true;}


//Latvian
isLoaded_lav=false;worker_lav: Tesseract.Worker;async loadWorker_lav(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_lav = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_lav.load();await this.worker_lav.loadLanguage('lav');await this.worker_lav.initialize('lav').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_lav=true;}


//Lithuanian
isLoaded_lit=false;worker_lit: Tesseract.Worker;async loadWorker_lit(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_lit = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_lit.load();await this.worker_lit.loadLanguage('lit');await this.worker_lit.initialize('lit').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_lit=true;}


//Malayalam
isLoaded_mal=false;worker_mal: Tesseract.Worker;async loadWorker_mal(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_mal = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_mal.load();await this.worker_mal.loadLanguage('mal');await this.worker_mal.initialize('mal').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_mal=true;}


//Macedonian
isLoaded_mkd=false;worker_mkd: Tesseract.Worker;async loadWorker_mkd(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_mkd = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_mkd.load();await this.worker_mkd.loadLanguage('mkd');await this.worker_mkd.initialize('mkd').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_mkd=true;}


//Maltese
isLoaded_mlt=false;worker_mlt: Tesseract.Worker;async loadWorker_mlt(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_mlt = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_mlt.load();await this.worker_mlt.loadLanguage('mlt');await this.worker_mlt.initialize('mlt').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_mlt=true;}


//Malay
isLoaded_msa=false;worker_msa: Tesseract.Worker;async loadWorker_msa(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_msa = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_msa.load();await this.worker_msa.loadLanguage('msa');await this.worker_msa.initialize('msa').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_msa=true;}


//Dutch
isLoaded_nld=false;worker_nld: Tesseract.Worker;async loadWorker_nld(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_nld = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_nld.load();await this.worker_nld.loadLanguage('nld');await this.worker_nld.initialize('nld').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_nld=true;}


//Norwegian
isLoaded_nor=false;worker_nor: Tesseract.Worker;async loadWorker_nor(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_nor = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_nor.load();await this.worker_nor.loadLanguage('nor');await this.worker_nor.initialize('nor').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_nor=true;}


//Polish
isLoaded_pol=false;worker_pol: Tesseract.Worker;async loadWorker_pol(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_pol = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_pol.load();await this.worker_pol.loadLanguage('pol');await this.worker_pol.initialize('pol').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_pol=true;}


//Portuguese
isLoaded_por=false;worker_por: Tesseract.Worker;async loadWorker_por(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_por = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_por.load();await this.worker_por.loadLanguage('por');await this.worker_por.initialize('por').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_por=true;}


//Romanian
isLoaded_ron=false;worker_ron: Tesseract.Worker;async loadWorker_ron(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_ron = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_ron.load();await this.worker_ron.loadLanguage('ron');await this.worker_ron.initialize('ron').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_ron=true;}


//Russian
isLoaded_rus=false;worker_rus: Tesseract.Worker;async loadWorker_rus(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_rus = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_rus.load();await this.worker_rus.loadLanguage('rus');await this.worker_rus.initialize('rus').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_rus=true;}


//Slovakian
isLoaded_slk=false;worker_slk: Tesseract.Worker;async loadWorker_slk(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_slk = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_slk.load();await this.worker_slk.loadLanguage('slk');await this.worker_slk.initialize('slk').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_slk=true;}


//Slovenian
isLoaded_slv=false;worker_slv: Tesseract.Worker;async loadWorker_slv(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_slv = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_slv.load();await this.worker_slv.loadLanguage('slv');await this.worker_slv.initialize('slv').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_slv=true;}


//Spanish
isLoaded_spa=false;worker_spa: Tesseract.Worker;async loadWorker_spa(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_spa = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_spa.load();await this.worker_spa.loadLanguage('spa');await this.worker_spa.initialize('spa').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_spa=true;}


//Old Spanish
isLoaded_spa_old=false;worker_spa_old: Tesseract.Worker;async loadWorker_spa_old(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_spa_old = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_spa_old.load();await this.worker_spa_old.loadLanguage('spa_old');await this.worker_spa_old.initialize('spa_old').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_spa_old=true;}


//Albanian
isLoaded_sqi=false;worker_sqi: Tesseract.Worker;async loadWorker_sqi(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_sqi = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_sqi.load();await this.worker_sqi.loadLanguage('sqi');await this.worker_sqi.initialize('sqi').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_sqi=true;}


//Serbian (Latin)
isLoaded_srp=false;worker_srp: Tesseract.Worker;async loadWorker_srp(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_srp = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_srp.load();await this.worker_srp.loadLanguage('srp');await this.worker_srp.initialize('srp').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_srp=true;}


//Swahili
isLoaded_swa=false;worker_swa: Tesseract.Worker;async loadWorker_swa(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_swa = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_swa.load();await this.worker_swa.loadLanguage('swa');await this.worker_swa.initialize('swa').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_swa=true;}


//Swedish
isLoaded_swe=false;worker_swe: Tesseract.Worker;async loadWorker_swe(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_swe = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_swe.load();await this.worker_swe.loadLanguage('swe');await this.worker_swe.initialize('swe').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_swe=true;}


//Tamil
isLoaded_tam=false;worker_tam: Tesseract.Worker;async loadWorker_tam(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_tam = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_tam.load();await this.worker_tam.loadLanguage('tam');await this.worker_tam.initialize('tam').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_tam=true;}


//Telugu
isLoaded_tel=false;worker_tel: Tesseract.Worker;async loadWorker_tel(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_tel = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_tel.load();await this.worker_tel.loadLanguage('tel');await this.worker_tel.initialize('tel').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_tel=true;}


//Tagalog
isLoaded_tgl=false;worker_tgl: Tesseract.Worker;async loadWorker_tgl(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_tgl = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_tgl.load();await this.worker_tgl.loadLanguage('tgl');await this.worker_tgl.initialize('tgl').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_tgl=true;}


//Thai
isLoaded_tha=false;worker_tha: Tesseract.Worker;async loadWorker_tha(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_tha = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_tha.load();await this.worker_tha.loadLanguage('tha');await this.worker_tha.initialize('tha').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_tha=true;}


//Turkish
isLoaded_tur=false;worker_tur: Tesseract.Worker;async loadWorker_tur(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_tur = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_tur.load();await this.worker_tur.loadLanguage('tur');await this.worker_tur.initialize('tur').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_tur=true;}


//Ukrainian
isLoaded_ukr=false;worker_ukr: Tesseract.Worker;async loadWorker_ukr(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_ukr = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_ukr.load();await this.worker_ukr.loadLanguage('ukr');await this.worker_ukr.initialize('ukr').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_ukr=true;}


//Vietnamese
isLoaded_vie=false;worker_vie: Tesseract.Worker;async loadWorker_vie(){this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();this.worker_vie = createWorker({logger: progress => {console.log(progress);if (progress.status == 'recognizing text') {this.captureProgress = parseInt(''+ progress.progress*100);}}}); await this.worker_vie.load();await this.worker_vie.loadLanguage('vie');await this.worker_vie.initialize('vie').then(async res => {let toast = await this.toastCtrl.create({message: 'Your App is '+ this.port.name + ' Ready',duration: 2000,position: 'top',color: 'secondary'  }); toast.present();}, async err => { let toast = await this.toastCtrl.create({   message: err,duration: 2000,position: 'top',color: 'danger'}); toast.present();});;console.log('App is ready!');this.workerReady = true;this.isLoaded_vie=true;}









loadWorkerList=[];

  


































  constructor(private clipboard: Clipboard,private toastCtrl: ToastController) {
    this.port ={id:15,value:'eng',name:'English'};
    this.ports = [
      { id: 1, value:'afr', name: 'Afrikaans' },
      { id: 2,value:'ara',name:'Arabic'},
      { id: 3, value:'aze',name:'Azerbaijani'},
      {id:4,value:'bel',name: 'Belarusian'},
      {id:5,value:'ben',name:'Bengali'},
      {id:6,value:'bul',name:'Bulgarian'},
      {id:7,value:'cat',name:'Catalan'},
      {id:8,value:'ces',name: 'Czech'},
      {id:9,value:'chi_sim',name:'Chinese'},
      {id:10,value:'chi_tra',name: 'Traditional Chinese'},
      {id:11,value:'chr',name:'Cherokee'},
      {id:12,value:'dan',name:'Danish'},
      {id:13,value:'deu',name:'German'},
      {id:14,value:'ell',name:'Greek'},
      {id:15,value:'eng',name:'English'},
      {id:16,value:'enm',name:'English (Old)'},
      {id:17,value:'meme',name:'Internet Meme'},
      {id:18,value:'epo',name:'Esperanto'},
      {id:19,value:'epo_alt',name:'Esperanto alternative'},
      {id:20,value:'equ',name:'Math'},
      {id:21,value:'est',name:'Estonian'},
      {id:22,value:'eus',name:'Basque'},
      {id:23,value:'fin',name:'Finnish'},
      {id:24,value:'fra',name:'French'},
      {id:25,value:'frk',name:'Frankish'},
      {id:26,value:'frm',name:'French (Old)'},
      {id:27,value:'glg',name:'Galician'},
      {id:28,value:'grc',name:'Ancient Greek'},
      {id:29,value:'heb',name:'Hebrew'},
      {id:30,value:'hin',name:'Hindi'},
      {id:31,value:'hrv',name:'Croatian'},
      {id:32,value:'hun',name:'Hungarian'},
      {id:33,value:'ind',name:'Indonesian'},
      {id:34,value:'isl',name:'Icelandic'},
      {id:35,value:'ita',name:'Italian'},
      {id:36,value:'ita_old',name:'Italian (Old)'},
      {id:37,value:'jpn',name:'Japanese'},
      {id:38,value:'kan',name:'Kannada'},
      {id:39,value:'kor',name:'Korean'},
      {id:40,value:'lav',name:'Latvian'},
      {id:41,value:'lit',name:'Lithuanian'},
      {id:42,value:'mal',name:'Malayalam'},
      {id:43,value:'mkd',name:'Macedonian'},
      {id:44,value:'mlt',name:'Maltese'},
      {id:45,value:'msa',name:'Malay'},
      {id:46,value:'nld',name:'Dutch'},
      {id:47,value:'nor',name:'Norwegian'},
      {id:48,value:'pol',name:'Polish'},
      {id:49,value:'por',name:'Portuguese'},
      {id:50,value:'ron',name:'Romanian'},
      {id:51,value:'rus',name:'Russian'},
      {id:52,value:'slk',name:'Slovakian'},
      {id:53,value:'slv',name:'Slovenian'},
      {id:54,value:'spa',name:'Spanish'},
      {id:55,value:'spa_old',name:'Old Spanish'},
      {id:56,value:'sqi',name:'Albanian'},
      {id:57,value:'srp',name:'Serbian (Latin)'},
      {id:58,value:'swa',name:'Swahili'},
      {id:59,value:'swe',name:'Swedish'},
      {id:60,value:'tam',name:'Tamil'},
      {id:61,value:'tel',name:'Telugu'},
      {id:62,value:'tgl',name:'Tagalog'},
      {id:63,value:'tha',name:'Thai'},
      {id:64,value:'tur',name:'Turkish'},
      {id:65,value:'ukr',name: 'Ukrainian'},
      {id:66,name: 'Vietnamese', value:'vie'},
      
    ];
   









    this.loadWorker_eng();
    
  }
  loadWorkerListFn(){

//Afrikaans
if (this.selectedLanguage == 'afr'){
  if(!this.isLoaded_afr)  {
    this.loadWorker_afr();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Arabic
else if (this.selectedLanguage == 'ara'){
  if(!this.isLoaded_ara)  {
    this.loadWorker_ara();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Azerbaijani
else if (this.selectedLanguage == 'aze'){
  if(!this.isLoaded_aze)  {
    this.loadWorker_aze();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Belarusian
else if (this.selectedLanguage == 'bel'){
  if(!this.isLoaded_bel)  {
    this.loadWorker_bel();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Bengali
else if (this.selectedLanguage == 'ben'){
  if(!this.isLoaded_ben)  {
    this.loadWorker_ben();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Bulgarian
else if (this.selectedLanguage == 'bul'){
  if(!this.isLoaded_bul)  {
    this.loadWorker_bul();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Catalan
else if (this.selectedLanguage == 'cat'){
  if(!this.isLoaded_cat)  {
    this.loadWorker_cat();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Czech
else if (this.selectedLanguage == 'ces'){
  if(!this.isLoaded_ces)  {
    this.loadWorker_ces();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Chinese
else if (this.selectedLanguage == 'chi_sim'){
  if(!this.isLoaded_chi_sim)  {
    this.loadWorker_chi_sim();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Traditional Chinese
else if (this.selectedLanguage == 'chi_tra'){
  if(!this.isLoaded_chi_tra)  {
    this.loadWorker_chi_tra();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Cherokee
else if (this.selectedLanguage == 'chr'){
  if(!this.isLoaded_chr)  {
    this.loadWorker_chr();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Danish
else if (this.selectedLanguage == 'dan'){
  if(!this.isLoaded_dan)  {
    this.loadWorker_dan();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//German
else if (this.selectedLanguage == 'deu'){
  if(!this.isLoaded_deu)  {
    this.loadWorker_deu();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Greek
else if (this.selectedLanguage == 'ell'){
  if(!this.isLoaded_ell)  {
    this.loadWorker_ell();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//English
else if (this.selectedLanguage == 'eng'){
  if(!this.isLoaded_eng)  {
    this.loadWorker_eng();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//English (Old)
else if (this.selectedLanguage == 'enm'){
  if(!this.isLoaded_enm)  {
    this.loadWorker_enm();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Internet Meme
else if (this.selectedLanguage == 'meme'){
  if(!this.isLoaded_meme)  {
    this.loadWorker_meme();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Esperanto
else if (this.selectedLanguage == 'epo'){
  if(!this.isLoaded_epo)  {
    this.loadWorker_epo();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Esperanto alternative
else if (this.selectedLanguage == 'epo_alt'){
  if(!this.isLoaded_epo_alt)  {
    this.loadWorker_epo_alt();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Math
else if (this.selectedLanguage == 'equ'){
  if(!this.isLoaded_equ)  {
    this.loadWorker_equ();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Estonian
else if (this.selectedLanguage == 'est'){
  if(!this.isLoaded_est)  {
    this.loadWorker_est();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Basque
else if (this.selectedLanguage == 'eus'){
  if(!this.isLoaded_eus)  {
    this.loadWorker_eus();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Finnish
else if (this.selectedLanguage == 'fin'){
  if(!this.isLoaded_fin)  {
    this.loadWorker_fin();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//French
else if (this.selectedLanguage == 'fra'){
  if(!this.isLoaded_fra)  {
    this.loadWorker_fra();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Frankish
else if (this.selectedLanguage == 'frk'){
  if(!this.isLoaded_frk)  {
    this.loadWorker_frk();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//French (Old)
else if (this.selectedLanguage == 'frm'){
  if(!this.isLoaded_frm)  {
    this.loadWorker_frm();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Galician
else if (this.selectedLanguage == 'glg'){
  if(!this.isLoaded_glg)  {
    this.loadWorker_glg();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Ancient Greek
else if (this.selectedLanguage == 'grc'){
  if(!this.isLoaded_grc)  {
    this.loadWorker_grc();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Hebrew
else if (this.selectedLanguage == 'heb'){
  if(!this.isLoaded_heb)  {
    this.loadWorker_heb();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Hindi
else if (this.selectedLanguage == 'hin'){
  if(!this.isLoaded_hin)  {
    this.loadWorker_hin();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Croatian
else if (this.selectedLanguage == 'hrv'){
  if(!this.isLoaded_hrv)  {
    this.loadWorker_hrv();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Hungarian
else if (this.selectedLanguage == 'hun'){
  if(!this.isLoaded_hun)  {
    this.loadWorker_hun();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Indonesian
else if (this.selectedLanguage == 'ind'){
  if(!this.isLoaded_ind)  {
    this.loadWorker_ind();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Icelandic
else if (this.selectedLanguage == 'isl'){
  if(!this.isLoaded_isl)  {
    this.loadWorker_isl();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Italian
else if (this.selectedLanguage == 'ita'){
  if(!this.isLoaded_ita)  {
    this.loadWorker_ita();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Italian (Old)
else if (this.selectedLanguage == 'ita_old'){
  if(!this.isLoaded_ita_old)  {
    this.loadWorker_ita_old();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Japanese
else if (this.selectedLanguage == 'jpn'){
  if(!this.isLoaded_jpn)  {
    this.loadWorker_jpn();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Kannada
else if (this.selectedLanguage == 'kan'){
  if(!this.isLoaded_kan)  {
    this.loadWorker_kan();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Korean
else if (this.selectedLanguage == 'kor'){
  if(!this.isLoaded_kor)  {
    this.loadWorker_kor();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Latvian
else if (this.selectedLanguage == 'lav'){
  if(!this.isLoaded_lav)  {
    this.loadWorker_lav();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Lithuanian
else if (this.selectedLanguage == 'lit'){
  if(!this.isLoaded_lit)  {
    this.loadWorker_lit();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Malayalam
else if (this.selectedLanguage == 'mal'){
  if(!this.isLoaded_mal)  {
    this.loadWorker_mal();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Macedonian
else if (this.selectedLanguage == 'mkd'){
  if(!this.isLoaded_mkd)  {
    this.loadWorker_mkd();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Maltese
else if (this.selectedLanguage == 'mlt'){
  if(!this.isLoaded_mlt)  {
    this.loadWorker_mlt();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Malay
else if (this.selectedLanguage == 'msa'){
  if(!this.isLoaded_msa)  {
    this.loadWorker_msa();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Dutch
else if (this.selectedLanguage == 'nld'){
  if(!this.isLoaded_nld)  {
    this.loadWorker_nld();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Norwegian
else if (this.selectedLanguage == 'nor'){
  if(!this.isLoaded_nor)  {
    this.loadWorker_nor();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Polish
else if (this.selectedLanguage == 'pol'){
  if(!this.isLoaded_pol)  {
    this.loadWorker_pol();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Portuguese
else if (this.selectedLanguage == 'por'){
  if(!this.isLoaded_por)  {
    this.loadWorker_por();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Romanian
else if (this.selectedLanguage == 'ron'){
  if(!this.isLoaded_ron)  {
    this.loadWorker_ron();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Russian
else if (this.selectedLanguage == 'rus'){
  if(!this.isLoaded_rus)  {
    this.loadWorker_rus();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Slovakian
else if (this.selectedLanguage == 'slk'){
  if(!this.isLoaded_slk)  {
    this.loadWorker_slk();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Slovenian
else if (this.selectedLanguage == 'slv'){
  if(!this.isLoaded_slv)  {
    this.loadWorker_slv();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Spanish
else if (this.selectedLanguage == 'spa'){
  if(!this.isLoaded_spa)  {
    this.loadWorker_spa();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Old Spanish
else if (this.selectedLanguage == 'spa_old'){
  if(!this.isLoaded_spa_old)  {
    this.loadWorker_spa_old();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Albanian
else if (this.selectedLanguage == 'sqi'){
  if(!this.isLoaded_sqi)  {
    this.loadWorker_sqi();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Serbian (Latin)
else if (this.selectedLanguage == 'srp'){
  if(!this.isLoaded_srp)  {
    this.loadWorker_srp();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Swahili
else if (this.selectedLanguage == 'swa'){
  if(!this.isLoaded_swa)  {
    this.loadWorker_swa();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Swedish
else if (this.selectedLanguage == 'swe'){
  if(!this.isLoaded_swe)  {
    this.loadWorker_swe();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Tamil
else if (this.selectedLanguage == 'tam'){
  if(!this.isLoaded_tam)  {
    this.loadWorker_tam();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Telugu
else if (this.selectedLanguage == 'tel'){
  if(!this.isLoaded_tel)  {
    this.loadWorker_tel();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Tagalog
else if (this.selectedLanguage == 'tgl'){
  if(!this.isLoaded_tgl)  {
    this.loadWorker_tgl();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Thai
else if (this.selectedLanguage == 'tha'){
  if(!this.isLoaded_tha)  {
    this.loadWorker_tha();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Turkish
else if (this.selectedLanguage == 'tur'){
  if(!this.isLoaded_tur)  {
    this.loadWorker_tur();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Ukrainian
else if (this.selectedLanguage == 'ukr'){
  if(!this.isLoaded_ukr)  {
    this.loadWorker_ukr();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}
//Vietnamese
else if (this.selectedLanguage == 'vie'){
  if(!this.isLoaded_vie)  {
    this.loadWorker_vie();  }
  else{
this.captureProgress=0;this.workerReady=true;
 }
}

    
    }















  async portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.workerReady=false;

    console.log('port:', event.value.name);
    this.selectedLanguage = event.value.value;

    this.loadWorkerListFn();
    this.num+=1;
    if (this.num == 1){
      let toast = await this.toastCtrl.create({
        message: 'You have one more search attempt left.',
        duration: 2000,
        position: 'top',
        color: 'danger'
  
      });
      toast.present();

    }
    if (this.num == 2){
      this.upperCap=true
    }
    
  
  }
  buttonFn(){
    this.clipboard.copy(this.ocrResult);

    this.clipboard.paste().then(async res => {
      let toast = await this.toastCtrl.create({
        message: 'Copied to Clipboard!',
        duration: 1500,
        position: 'bottom',
        color: 'secondary'
      });
      toast.present();
    }, async err => {
        let toast = await this.toastCtrl.create({
          message: err,
          duration: 1500,
          position: 'bottom',
          color: 'danger'
    
        });
        toast.present();
    }
    );;
    
    this.clipboard.clear();
    this.captureProgress=0;
    this.ocrResult = '';
    
  }
 
  async captureImage(){
   
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });
    
    
    console.log('image: ', image);
    this.image=image.dataUrl;
    this.captureProgress=0;
    this.ocrResult = '';

  }








  

 




















  async loadWorker(){
    this.captureProgress = 0;this.ocrResult='';let toast = await this.toastCtrl.create({message: 'You may have to wait for a few seconds',duration: 2000,position: 'top',color: 'secondary'});toast.present();
    this.worker = createWorker({
    logger: progress => {
     console.log(progress);
     if (progress.status == 'recognizing text'){
       this.captureProgress = parseInt(''+ progress.progress*100);
     }
   }
 });
 await this.worker.load();
 await this.worker.loadLanguage(this.selectedLanguage);
 await this.worker.initialize(this.selectedLanguage).then(async res => {
  let toast = await this.toastCtrl.create({
    message: 'Your App is '+ 'English' + ' Ready',
    duration: 2000,
    position: 'top',
    color: 'secondary'
  });
  toast.present();
}, async err => {
    let toast = await this.toastCtrl.create({
      message: err,
      duration: 2000,
      position: 'top',
      color: 'danger'

    });
    toast.present();
}
);
 console.log('Finished');
 this.workerReady = true;


  }



  loadWorkerFn(){
    if(this.port.value=='afr'){
       return this.worker_afr;
    }
    
    else if(this.port.value=='ara'){
       return this.worker_ara;
    }
    
    else if(this.port.value=='aze'){
       return this.worker_aze;
    }
    
    else if(this.port.value=='bel'){
       return this.worker_bel;
    }
    
    else if(this.port.value=='ben'){
       return this.worker_ben;
    }
    
    else if(this.port.value=='bul'){
       return this.worker_bul;
    }
    
    else if(this.port.value=='cat'){
       return this.worker_cat;
    }
    
    else if(this.port.value=='ces'){
       return this.worker_ces;
    }
    
    else if(this.port.value=='chi_sim'){
       return this.worker_chi_sim;
    }
    
    else if(this.port.value=='chi_tra'){
       return this.worker_chi_tra;
    }
    
    else if(this.port.value=='chr'){
       return this.worker_chr;
    }
    
    else if(this.port.value=='dan'){
       return this.worker_dan;
    }
    
    else if(this.port.value=='deu'){
       return this.worker_deu;
    }
    
    else if(this.port.value=='ell'){
       return this.worker_ell;
    }
    
    else if(this.port.value=='eng'){
       return this.worker_eng;
    }
    
    else if(this.port.value=='enm'){
       return this.worker_enm;
    }
    
    else if(this.port.value=='meme'){
       return this.worker_meme;
    }
    
    else if(this.port.value=='epo'){
       return this.worker_epo;
    }
    
    else if(this.port.value=='epo_alt'){
       return this.worker_epo_alt;
    }
    
    else if(this.port.value=='equ'){
       return this.worker_equ;
    }
    
    else if(this.port.value=='est'){
       return this.worker_est;
    }
    
    else if(this.port.value=='eus'){
       return this.worker_eus;
    }
    
    else if(this.port.value=='fin'){
       return this.worker_fin;
    }
    
    else if(this.port.value=='fra'){
       return this.worker_fra;
    }
    
    else if(this.port.value=='frk'){
       return this.worker_frk;
    }
    
    else if(this.port.value=='frm'){
       return this.worker_frm;
    }
    
    else if(this.port.value=='glg'){
       return this.worker_glg;
    }
    
    else if(this.port.value=='grc'){
       return this.worker_grc;
    }
    
    else if(this.port.value=='heb'){
       return this.worker_heb;
    }
    
    else if(this.port.value=='hin'){
       return this.worker_hin;
    }
    
    else if(this.port.value=='hrv'){
       return this.worker_hrv;
    }
    
    else if(this.port.value=='hun'){
       return this.worker_hun;
    }
    
    else if(this.port.value=='ind'){
       return this.worker_ind;
    }
    
    else if(this.port.value=='isl'){
       return this.worker_isl;
    }
    
    else if(this.port.value=='ita'){
       return this.worker_ita;
    }
    
    else if(this.port.value=='ita_old'){
       return this.worker_ita_old;
    }
    
    else if(this.port.value=='jpn'){
       return this.worker_jpn;
    }
    
    else if(this.port.value=='kan'){
       return this.worker_kan;
    }
    
    else if(this.port.value=='kor'){
       return this.worker_kor;
    }
    
    else if(this.port.value=='lav'){
       return this.worker_lav;
    }
    
    else if(this.port.value=='lit'){
       return this.worker_lit;
    }
    
    else if(this.port.value=='mal'){
       return this.worker_mal;
    }
    
    else if(this.port.value=='mkd'){
       return this.worker_mkd;
    }
    
    else if(this.port.value=='mlt'){
       return this.worker_mlt;
    }
    
    else if(this.port.value=='msa'){
       return this.worker_msa;
    }
    
    else if(this.port.value=='nld'){
       return this.worker_nld;
    }
    
    else if(this.port.value=='nor'){
       return this.worker_nor;
    }
    
    else if(this.port.value=='pol'){
       return this.worker_pol;
    }
    
    else if(this.port.value=='por'){
       return this.worker_por;
    }
    
    else if(this.port.value=='ron'){
       return this.worker_ron;
    }
    
    else if(this.port.value=='rus'){
       return this.worker_rus;
    }
    
    else if(this.port.value=='slk'){
       return this.worker_slk;
    }
    
    else if(this.port.value=='slv'){
       return this.worker_slv;
    }
    
    else if(this.port.value=='spa'){
       return this.worker_spa;
    }
    
    else if(this.port.value=='spa_old'){
       return this.worker_spa_old;
    }
    
    else if(this.port.value=='sqi'){
       return this.worker_sqi;
    }
    
    else if(this.port.value=='srp'){
       return this.worker_srp;
    }
    
    else if(this.port.value=='swa'){
       return this.worker_swa;
    }
    
    else if(this.port.value=='swe'){
       return this.worker_swe;
    }
    
    else if(this.port.value=='tam'){
       return this.worker_tam;
    }
    
    else if(this.port.value=='tel'){
       return this.worker_tel;
    }
    
    else if(this.port.value=='tgl'){
       return this.worker_tgl;
    }
    
    else if(this.port.value=='tha'){
       return this.worker_tha;
    }
    
    else if(this.port.value=='tur'){
       return this.worker_tur;
    }
    
    else if(this.port.value=='ukr'){
       return this.worker_ukr;
    }
    
    else if(this.port.value=='vie'){
       return this.worker_vie;
    }
    
    }


  async recognizeImage(){
    this.ocrResult = '';
    this.disablingButton=true;
    let toast = await this.toastCtrl.create({
      message: 'Please wait while Recognition Software Optimises',
      duration: 4000,
      position: 'top',
      color: 'secondary'
    });
    toast.present();
    const result = await this.loadWorkerFn().recognize(this.image);
    console.log(result);
    this.ocrResult = result.data.text;
    this.disablingButton=false;
  }
  disabledButton=false;
   disable(){
     if(this.workerReady == false ){
       if (this.disablingButton == true){
         this.disabledButton= true;
       }
       else{
         this.disabledButton= false;
       }}
       else{
         this.disabledButton= false;
       }
     }
   

  async portChange2(val){
    this.captureProgress=0;
    this.ocrResult='';
    let j = 0;
    for (let i=1; i<= this.ports.length; i++){
      if(i==val){
        j=val-1;
        break;
      }
    }
    let toast = await this.toastCtrl.create({
      message: 'Selected Language: '+ this.ports[j].name,
      duration: 2000,
      position: 'top',
      color: 'secondary'
    });
    toast.present();
    this.port = this.ports[j];
  }


  

}
