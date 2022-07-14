import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hypothesistest',
  templateUrl: './hypothesistest.component.html',
  styleUrls: ['./hypothesistest.component.css']
})
export class HypothesistestComponent implements OnInit {

  mode:string;
  expnse1= "N'=\\frac{[z_{\\frac{\\alpha }{2}}\\sqrt{p_{0}(1-p_{0})}+z_{\\frac{\\beta  }{2}}\\sqrt{p_{1}(1-p_{1})}]^{2}}{(p_{1}-p_{0})^{2}}";
  expnse2="N=\\frac{{N}'}{(1-q)} ";
  expnse3="k=\\frac{n_{1}}{n_{2}} ";
  expnse4="p=\\frac{p_{1}+kp_{2}}{1+k}";
  expnse5=" N_{2}=\\frac{[z_{\\frac{\\alpha }{2}}\\sqrt{(1+\\frac{1}{k})p(1-p)} + z_ {\\frac{\\beta}{2}}\\sqrt{\\frac{p_{1}(1-p_{1})}{k}p_{2}(1-p_{2})}]^{2}}{(p_{1}-p_{2})^{2}}";
  expnse6=" n_{2}=\\frac{{N_{2}}}{(1-q)} ";
  expnse7=" N_{1}=k*N_{2}";
  expnse8=" n_{1}=\\frac{{N_{1}}}{(1-q)}";
  expnse9=" N=n_{1}+n_{2}";
  exp1="N'=\\frac{(z_{\\frac{\\alpha}{2}}+z_{\\beta })^2p_{1}(1-p_{1})}{(p_{1}-p_{0})^2}";

  expuc="N_{2}=\\frac{(z_{\\frac{\\alpha }{2}}+z_{\\beta})^2}{(p_{1}-p_{2})^2}[\\frac{p_{1}(1-p_{1})}{k}+p_{2}(1-p_{2})]";

  expcf="N_{2}=\\frac{N_{2}}{4}[1+\\sqrt{1+\\frac{2(k+1)}{kN_{2}|p_{1}-p_{2}|}}]";




  showp0:boolean;
  showp2:boolean;
  show:boolean;
  showq:boolean;
  showres:boolean;


  // showp0:boolean =true;
  // showp2:boolean =true;
  // show:boolean  =true;
  // showq:boolean =true;
  // showres:boolean =true;
  power;
  sig;


  public showData(value: string){

    switch(this.mode){
      case "compare":{
        this.clearall();
        this.showp2=true;
        this.showp0=false;

        this.show = true;
        this.showq =true;
        this.showres =true;


        break;
      }
      case "testsingle":{
        this.clearall();

        this.showp0=true;
        this.showp2=false;
        this.show = true;
        this.showq =true;
        this.showres =true;
        break;
      }

    }

  }


// get prevalence
  p0 ='';
  onKey(value: string) {
    this.p0 = value ;
    return this.p0
  }
// get sensitivity
  p1='';
  onKey1(value: string){
    this.p1 = value;
    return this.p1
  }
  p2='';
  onKey2(value: string){
    this.p2 = value;
    return this.p2
  }
  k='';
  onKey3(value: string){
    this.k = value;
    return this.k
  }

// get failure rate
  q='';
  onKey4(value: string){
    this.q =value;
  }


// clear the data
  public clearall(){
    this.p0 ='';
    this.p1 ='';
    this.p2 ='';
    // this.selec ='';
    this.sig='';

  }


  selec;

  z; 
  significance;
  selecp;
  res;
  nc;
  n1c;
  n2c;
  ncc;
  n1cc;
  n2cc;
  nuc;
  n1uc;
  n2uc;
  nucc;
  n1ucc;
  n2ucc;
  n2;


  res1;


  public calculation(){
    var p0:number = ((parseFloat(this.p0))/100)
    var p1:number = ((parseFloat(this.p1))/100)
    var q:number = ((parseFloat(this.q))/100)

    var z: number
    var b: number
    var n0: number
    var samplesize: number

    var k:number= parseFloat(this.k)

    var p:number
    var p2:number = (parseFloat(this.p2))/100
    var N1:number
    var N2:number
    var N2uc:number
    var N2cc:number
    var N2ucc:number

    if (this.selec=="10"){
      z = 1.6545;
    }else if (this.selec=="5"){
      z =  1.960;
    }else if (this.selec=="2"){
      z =  2.326;
    }else if(this.selec=="1"){
      z =  2.576;
    }

    if (this.selecp=="70"){
      b = 0.52;
    }else if (this.selecp=="75"){
      b =  0.67;
    }else if (this.selecp=="80"){
      b =  0.84;
    }else if(this.selecp=="85"){
      b = 1.03 ;
    }else if(this.selecp=="90"){
      b =  1.28;
    }else if(this.selecp=="95"){
      b =  1.64;
    }else if(this.selecp=="99"){
      b =  2.33;
    }

    console.log("b=",b)

    console.log("k=",k)

   
//     var samplesize:number
//     var samplesizesp:number
// // samplesize based on sensitivity;
    if (this.mode =='compare' ){
 
      p=(k*p1+p2)/(1+k);

      console.log("p=",p);

      N2= Math.pow(z*Math.sqrt((1+1/k)*p*(1-p))+b*Math.sqrt((p1*(1-p1)/k+p2*(1-p2))),2) /(Math.pow((p1-p2),2));

      console.log("N2=",N2);

      this.n2c= Math.ceil(N2/(1-q));
      console.log("n2=",this.n2c)
      N1=k*N2
      console.log("N1=",N1);
      this.n1c= Math.ceil(N1/(1-q)) ;
      console.log("n1=",this.n1c);
      this.nc=Math.ceil( this.n1c+this.n2c );

   
      N2cc=(N2/4)*Math.pow((1+ Math.sqrt(1+ (2*(k+1))/(k*N2*Math.abs(p1-p2)))),2);

      this.n2cc=Math.ceil(N2cc/(1-q));
      this.n1cc=Math.ceil(k*N2cc/(1-q));
      this.ncc=(this.n1cc+this.n2cc);



      N2uc=Math.pow((z+b),2)/Math.pow((p1-p2),2)*(p1*(1-p1)/k+p2*(1-p2));

      this.n2uc=Math.ceil(N2uc/(1-q));
      this.n1uc=Math.ceil(k*N2uc/(1-q));
      this.nuc=Math.ceil(this.n1uc+this.n2uc);

      N2ucc=(N2uc/4)*Math.pow((1+ Math.sqrt(1+ (2*(k+1))/(k*N2uc*Math.abs(p1-p2)))),2);
      this.n2ucc=Math.ceil(N2ucc/(1-q));
      this.n1ucc=Math.ceil(k*N2ucc/(1-q));
      this.nucc=Math.ceil(this.n1ucc+this.n2ucc);




//   // samplesize based on specificity;   
    }else if (this.mode =='testsingle'){
      var nc1;
      n0= Math.pow((z*Math.sqrt(p0*(1-p0))+b*Math.sqrt(p1*(1-p1))),2) /(Math.pow((p1-p0),2));
      nc1= Math.pow((z+b),2)*p1*(1-p1)/(Math.pow((p1-p0),2));
      this.n2=Math.ceil( nc1/(1-q) );
      samplesize =  Math.ceil( n0/(1-q) );

    }
    // else if (this.mode=='ss'){
//       samplesize =  Math.ceil( z*z*sensitivity*(1-sensitivity)/((merror*merror*prevalence)*(1-likelihood)));
//       samplesizesp =  Math.ceil ( z*z*specificity*(1-specificity)/(merror*merror*(1-prevalence)*(1-likelihood)));
//       //npv ppv
//       this.ressp = samplesizesp
//       this.ppv = (sensitivity*prevalence/(sensitivity*prevalence+(1-specificity)*(1-prevalence))).toFixed(2);
//       this.npv = (specificity*(1-prevalence)/((1-sensitivity)*prevalence+specificity*(1-prevalence))).toFixed(2);
//     }
//     else if (this.mode=='prevalence'){
//       samplesize = Math.ceil(z*z*prevalence/(merror*merror));
//     }
    
    return this.res = samplesize

    
  }


  constructor() { }

  ngOnInit(){


    this.significance = [ {significancelevel:"10"},
    {significancelevel:"5"},
    {significancelevel:"2"},
    {significancelevel:"1"}];

    this.selec;


     this.power = [ {power:"70"},
     {power:"75"},
     {power:"80"},
     {power:"85"},
     {power:"90"},
     {power:"95"},
     {power:"99"}];
 
     this.selecp;
  }

}
