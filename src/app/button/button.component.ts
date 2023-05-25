import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { IconColor } from '../../models/icon-color.enum';
import { IconComponent } from '../icon/icon.component';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Destroy = 'destroy',
}

/**
 * Der Standard-Button wird für alle Fälle verwendet, in denen der Button innerhalb eines Containers sitzt.
 *
 * Buttons welche in ihrer Position unveränderlich sind und eine globale Aktion
 * (immer gleich, aus verschiedenen Routen der Anwendung ansteuerbar) auslösen,
 * werden vom restlichen Layout entkoppelt.
 * Siehe [Floating Action Button](https://youtu.be/dQw4w9WgXcQ)
 *
 *
 * Achtung: Wenn kein Label gesetzt wird, handelt es sich um einen "Icon-Only-Button"
 * Hierbei handelt es sich um einen Sonderfall, welcher optisch anders dargestellt wird.
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, IconComponent],
})
export class ButtonComponent {
  /**
   * Text welcher dargestellt wird
   */
  @Input() label = '';
  /**
   * Groesse des Buttons
   */
  @Input() size: ButtonSize = ButtonSize.Medium;
  /**
   * Icon-Name -> siehe Font-Awesome. z.B. 'beer', 'home', ...
   */
  @Input() icon?: IconName;
  /**
   * Typ des Buttons
   */
  @Input() type: ButtonType = ButtonType.Primary;
  /**
   * Deaktiviert den Button und entfernt click events
   */
  @Input() disabled = false;

  get buttonClasses(): string {
    const iconOnly = !this.label ? 'icon-only' : '';
    return `${this.size} ${this.type} ${iconOnly}`;
  }

  get iconColor(): IconColor {
    if (this.disabled) {
      return IconColor.Gray;
    }
    switch (this.type) {
      case ButtonType.Primary:
      case ButtonType.Destroy:
        return IconColor.White;
      case ButtonType.Secondary:
        return IconColor.Blue;
    }
  }
}
