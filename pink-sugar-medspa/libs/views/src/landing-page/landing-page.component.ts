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
  public imgSlider(anything: any) {
    const lollipopImage = document.querySelector('.lollipop-syringe');
    if (lollipopImage instanceof HTMLImageElement) {
      lollipopImage.src = anything;
    } else {
      console.error('lollipopImage is not an image');
    }
  }

  private pageAnimations() {
    gsap.from('.navbar', {
      duration: 1,
      delay: 1,
      x: -40,
      opacity: 0,
      ease: 'expo.inOut',
    });

    gsap.fromTo(
      '.stripe',
      { scaleX: 0 },
      {
        duration: 2.4,
        scaleX: 1,
      }
    );

    gsap.from('.lollipop-syringe', {
      duration: 1,
      delay: 1.4,
      opacity: 0,
      y: -150,
    });

    gsap.from('.text h1', {
      duration: 1,
      delay: 1,
      opacity: 0,
      x: 200,
    });

    gsap.to('.stripe span', {
      duration: 1,
      delay: 2,
      opacity: 1,
    });

    gsap.from('.text h3', {
      duration: 1,
      delay: 2.5,
      opacity: 0,
      x: -200,
    });

    gsap.from('.media', {
      duration: 2,
      opacity: 0,
    });
  }
}
