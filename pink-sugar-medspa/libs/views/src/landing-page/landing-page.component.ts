import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { gsap } from 'gsap';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'psm-landing-page',
  templateUrl: './landing-page.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingPageComponent implements AfterViewInit {
  protected taglines: string[] = [
    'Cosmetic Aesthetics',
    'Contemporary Beauty x Advanced Science',
    'Medical Director',
  ];
  @ViewChild('content', { static: true })
  protected content?: ElementRef;

  ngAfterViewInit(): void {
    this.pageAnimations();
  }

  private pageAnimations() {
    // logo animations
    gsap
      .timeline({ repeat: -1, yoyo: true })
      .to('.logo', { scale: 1.1, duration: 1 });

    gsap.from('.logo', {
      duration: 2,
      opacity: 0,
    });

    // banner animations
    const contentWidth = this.content?.nativeElement.clientWidth;

    gsap.to(this.content?.nativeElement, {
      x: -contentWidth / 2,
      duration: 45,
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % (contentWidth / 2)}px`,
      },
    });
  }
}
