import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

/** The button component
 *
 *  @deprecated
 */
@Component({
  selector: 'app-button-deprecated',
  templateUrl: './button-deprecated.component.html',
  styleUrls: ['./button-deprecated.component.scss'],
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDeprecatedComponent implements OnInit {
  @Input() @HostBinding('class.icon') icon?: IconName;
  @Input() @HostBinding('class.disabled') disabled = false;
  @Input() @HostBinding('class.icononend') icononend?: boolean;
  @Input() spinner?: boolean;
  @Input() @HostBinding('class.mobile-round') iconOnMobile?: boolean;
  @Input() @HostBinding('class.sm') iconOnMobileSmall?: boolean;
  @Input() @HostBinding('class.icon-on') iconColor?: boolean;
  @Input() @HostBinding('class') type:
    | 'primary'
    | 'secondary'
    | 'outline'
    | undefined;

  isMobile?: boolean;

  constructor() {} // private readonly matchMedia: MatchMediaService, // private readonly comboboxService: DistinctOpenService,

  ngOnInit() {
    // this.isMobile = this.matchMedia.matches(MOBILE_QUERY);
  }

  @HostListener('click', ['$event'])
  click(event: UIEvent) {
    if (this.disabled) {
      return;
    }
    event.stopPropagation();
    // this.comboboxService.open$.next(null);
  }
}
