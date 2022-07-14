import { Component, OnInit } from '@angular/core';
import {Phi} from '../phi';
import{PHI} from '../get-phi'

@Component({
  selector: 'app-samplesize',
  templateUrl: './samplesize.component.html',
  styleUrls: ['./samplesize.component.css']
})
export class SamplesizeComponent implements OnInit {

  mode:string;
  expnse1= "{N}' _{Se} = \\frac{{Z_{\\frac{\\alpha}{2}}}^{2} Se(1-Se)}{M^{2} \\times prev}";
  expnse2="{N} _{Se} = \\frac {{N}' _{Sp}}{(1-q)}";

  expnsp1="{N}' _{Sp} = \\frac{{Z_{\\frac{\\alpha}{2}}}^{2} Sp(1-Sp)}{M^{2} \\times (1-prev)}";
  expnsp2="{N} _{Sp} = \\frac {{N}' _{Sp}}{(1-q)}";

  expppv="PPV=\\frac{Se \\times Prev}{ Se \\times Prev +(1-Sp) \\times (1-prev)}";
  expnpv="NPV=\\frac{Sp \\times (1-prev)}{ (1-Se) \\times Prev +Sp \\times (1-prev)}";


  expauc1= "{N_{D}}'= \\frac{{z_{\\frac{a}{2}}}^{2}\\times V(AUC))}{(1-q)}";
  expauc2="{N_{ND}}' =R\\times {N_{D}}'";
  expauc3="N _{D}=\\frac{{N}_{D}'}{(1-q)} ";
  expauc4="N _{ND}=\\frac{{N}_{ND}'}{(1-q)} ";
  expauc5="N={N_{D}}+{N_{ND}}";
  expauc6="V(AUC)=N_{D}Var(\\widehat{AUC})=(0.0099\\times e^{-a^2/2}) \\times ((5a^2+8)+\\frac{a^2 +8}{R})";

  showse:boolean ;
  showsp:boolean;
  showss:boolean;
  showprev:boolean;
  show:boolean  ;
  showlh:boolean ;
  showres:boolean ;
  showsef:boolean ;
  showspf:boolean ;
  showauc:boolean ;

  phi=PHI;

  selectedphi:Phi;



  // showse:boolean =true;
  // showsp:boolean =true;
  // showss:boolean=true;
  // showprev:boolean=true;
  // show:boolean  =true;
  // showlh:boolean =true;
  // showres:boolean =true;
  // showsef:boolean =true;
  // showspf:boolean =true;
  // showauc:boolean =true;


  public showData(value: string){

    switch(this.mode){
      case "sensitivity":{
        this.clearall();
        this.showprev=true;
        this.showse = true;
        this.showsp = false;
        this.showss = false;
        this.show = true;
        this.showlh =true;
        this.showres = true;
        this.showsef = true;
        this.showspf = false;
        this.showauc = false;
        break;
      }
      case "specificity":{
        this.clearall();
        this.showprev=true;
        this.showse = false;
        this.showsp = true;
        this.showss = false;
        this.show = true;
        this.showlh =true;
        this.showres =true;
        this.showspf = true;
        this.showsef = false;
        this.showauc = false;
        break;
      }
      case "ss":{
        this.clearall();
        this.showprev=true;
        this.showse = true;
        this.showsp = true;
        this.showss = true;
        this.show = true;
        this.showlh =true;
        this.showres =false;
        this.showsef = true;
        this.showspf = true;
        this.showauc = false;
        break;
      }

      case "lr":{
        this.clearall();
        this.showse = true;
        this.showsp = true;
        this.showss = true;
        this.show = true;
        this.showlh =true;
        this.showres =false;
        this.showsef = true;
        this.showspf = true;
        this.showauc = false;
        break;
      }


      case "auc":{
        this.clearall();
        this.showprev=false;
        this.showse = false;
        this.showsp = false;
        this.showss = false;
        this.show = true;
        this.showauc =true;
        this.showlh =true;
        this.showres =true;
        this.showsef = false;
        this.showspf = false;
        break;
      }

    }

  }


// get prevalence
  prev ='';
  onKey(value: string) {
    this.prev = value ;
    return this.prev
  }
// get sensitivity
  se='';
  onKey1(value: string){
    this.se = value;
    return this.se
  }
// get specificity
  sp='';
  onKey2(value: string){
    this.sp = value;
  }
// get marginal error
  me='';
  onKey3(value: string){
    this.me = value;
  }
// get likelihood
  lh='';
  onKey4(value: string){
    this.lh =value;
  }

  auc='';
  onKeyauc(value: string){
    this.auc =value;
  }

  R='';
  onKeyR(value: string){
    this.R =value;
  }
// clear the data
  public clearall(){
    this.prev ='';
    this.se='';
    this.sp='';
    this.me='';
    this.lh='';
    this.res='';
    this.ressp='';
    this.ppv ='';
    this.npv='';
  }

  confidence;
  selec;
  res;
  ressp;
  ppv;
  npv;
  z; 
  nnd;
  nd;

  public getphibyauc(auc) {
    
    return this.phi.find(x => x.auc === auc);
    
  }

  // test = this.getphibyauc(0.70);

  public calculation(){
    var prevalence:number = ((parseFloat(this.prev))/100)
    var sensitivity:number = ((parseFloat(this.se))/100)
    var specificity:number = ((parseFloat(this.sp))/100)
    var merror:number = ((parseFloat(this.me))/100)
    var likelihood:number = ((parseFloat(this.lh))/100)
    var z: number
    var auc:number = (parseFloat(this.auc))
    var V
    var a
    var o

    var nd,nd1
    var nnd,nnd1
    var R = (parseFloat(this.R))


  if (this.selec=="90"){
    z = 1.6545;
  }else if (this.selec=="95"){
    z =  1.960;
  }else if (this.selec=="98"){
    z =  2.326;
  }else if(this.selec=="99"){
    z =  2.576;
  }
   
    var samplesize:number
    var samplesizesp:number
// samplesize based on sensitivity;
    if (this.mode =='sensitivity' ){
      samplesize =  Math.ceil( (z*z*sensitivity*(1-sensitivity)/(merror*merror*prevalence))/(1-likelihood)  );
  // samplesize based on specificity;   
    }else if (this.mode =='specificity'){
      samplesize =  Math.ceil ( z*z*specificity*(1-specificity)/((merror*merror*(1-prevalence))*(1-likelihood)));

    }else if (this.mode=='ss'){
      samplesize =  Math.ceil( z*z*sensitivity*(1-sensitivity)/((merror*merror*prevalence)*(1-likelihood)));
      samplesizesp =  Math.ceil ( z*z*specificity*(1-specificity)/(merror*merror*(1-prevalence)*(1-likelihood)));
      //npv ppv
      this.ressp = samplesizesp
      this.ppv = (sensitivity*prevalence/(sensitivity*prevalence+(1-specificity)*(1-prevalence))).toFixed(2);
      this.npv = (specificity*(1-prevalence)/((1-sensitivity)*prevalence+specificity*(1-prevalence))).toFixed(2);
    }
    else if (this.mode=='prevalence'){
      samplesize = Math.ceil(z*z*prevalence/(merror*merror));
    }
    else if(this.mode=='auc'){
      o= this.getphibyauc(auc).phivalue;
      a=o*1.414;
      console.log("a=",a);
      var a1 = -((a*a)/2);
      console.log("-a^2/2=",a1);
      var e =Math.exp(a1);
      console.log("exp-a^2/2=",e);

      // var x=(6*a^2)+16;

      // console.log("6a^2+16=",x);

      // V= (0.0099*(Math.exp(-(a*a)/2))*(6*a*a+16));
      V= (0.0099*(Math.exp(-(a*a)/2))*((5*a*a+8)+(a*a+8)/2));
      console.log(V);
      nd1= Math.ceil(z*z*V/(merror*merror));
      this.nd= Math.ceil( nd1/(1-likelihood));
      console.log("nd",this.nd);
      nnd1=R*nd1
      this.nnd=Math.ceil( nnd1/(1-likelihood));
      console.log("nnd",this.nnd);
      samplesize =this.nd+this.nnd;
      console.log("n",samplesize);

    }
    
    return this.res = samplesize

    
  }


  constructor() { }

  ngOnInit() {

  this.confidence = [ {condidencelevel:"90"},
                      {condidencelevel:"95"},
                      
                      {condidencelevel:"98"},
                      {condidencelevel:"99"}];

  this.selec;

  }

  

}
