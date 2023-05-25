import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ButtonDeprecatedComponent } from '../button-deprecated/button-deprecated.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonComponent, ButtonDeprecatedComponent],
  exports: [ButtonComponent, ButtonDeprecatedComponent],
})
export class CoreModule {}
