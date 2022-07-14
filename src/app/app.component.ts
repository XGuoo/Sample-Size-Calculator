import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'power-app';
  exp1=`When $ a \\ne 0 $, there are two solutions to \\(ax^2 + bx + c = 0 \\) and they are
  $$ x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$`;
  exp2=`and they are
   x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}`;
}
