import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'psm-landing-page',
  templateUrl: './landing-page.component.html',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
    this.pageAnimations();
  }

  private pageAnimations() {
    gsap
      .timeline({ repeat: -1, yoyo: true })
      .to('.logo', { scale: 1.1, duration: 1 });

    gsap.from('.logo', {
      duration: 4,
      opacity: 0,
    });
  }
}
