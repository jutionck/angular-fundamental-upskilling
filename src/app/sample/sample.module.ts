import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResourceComponent } from './resource/resource.component';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SampleComponent } from './sample.component';

const components = [
  HeaderComponent,
  FooterComponent,
  ResourceComponent,
  NextStepsComponent,
  ToolbarComponent,
  SampleComponent
];

@NgModule({
  declarations: [...components, SampleComponent],
  exports: [ ...components, SampleComponent ],
  imports: [
    CommonModule,
  ],
})
export class SampleModule { }
