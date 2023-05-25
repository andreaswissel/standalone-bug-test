import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { IconColor } from '../../models/icon-color.enum';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
})
export class IconComponent {
  @Input() iconStyle: IconPrefix = 'far';
  @Input() iconName: IconName = 'bell';
  @Input() iconColor: IconColor = IconColor.White;

  constructor(private readonly library: FaIconLibrary) {
    this.library.addIconPacks(fas, far);
  }
}
