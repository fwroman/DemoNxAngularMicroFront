import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicLoaderDirective } from '../../directives/dynamic-loader.directive';
import { DynamicComponentDirective } from '../../directives/dynamic-component.directive';
import { DynamicAppLoaderService } from '../../services/dynamic-app-loader.service';

@NgModule({
  declarations: [DynamicLoaderDirective, DynamicComponentDirective],
  imports: [
    CommonModule
  ],
  providers: [DynamicAppLoaderService],
  exports: [
    DynamicLoaderDirective,
    DynamicComponentDirective
  ]
})
export class SharedModule { }
