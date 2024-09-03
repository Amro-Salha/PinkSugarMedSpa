import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SlickCarouselModule } from 'ngx-slick-carousel';

export interface Service {
  serviceName: string;
  serviceDescription: string[];
  comingSoon?: boolean;
  displayImage: string;
  price?: number;
  workExamples?: WorkExample[];
}

export interface WorkExample {
  mediaSource: string;
  embedCode: string;
  scriptSrc: string;
  href: string;
}

@Component({
  selector: 'psm-service',
  templateUrl: './service.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SlickCarouselModule,
  ],
})
export class ServiceComponent {
  protected slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: true,
    adaptiveHeight: true,
    arrows: false,
    swipe: false,
  };

  protected childSlideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    infinite: false,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    draggable: false,
    swipe: false,
    touchMove: false,
    prevArrow: '.prev-arrow',
    nextArrow: '.next-arrow',
    dots: true,
    appendDots: '.dots',
    responsive: [
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          initialSlide: 0,
          centerMode: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          initialSlide: 0,
          slidesToShow: 1,
        },
      },
    ],
  };

  protected loading = true;
  private embedLoadedCounter = 0;

  @Input()
  public serviceName?: string;

  @Input()
  public serviceDescription?: string[];

  @Input()
  public displayImage?: string;

  @Input()
  public comingSoon?: boolean;

  @Input()
  public price?: number;

  @Input()
  public workExamples?: WorkExample[];

  constructor(private renderer: Renderer2, private el: ElementRef) {
    // this.loadWorkExamples();
  }

  // ngAfterViewChecked(): void {
  //   //Called after every check of the component's view. Applies to components only.
  //   //Add 'implements AfterViewChecked' to the class.
  //   this.loadWorkExamples();
  // }

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.loadWorkExamples();
  // }

  private loadWorkExamples() {
    if (!this.workExamples) {
      return;
    }

    this.workExamples.forEach((workExample, index) => {
      const embedCode = workExample.embedCode;
      const embedContainer = this.el.nativeElement.querySelector(
        `#${workExample.mediaSource}-${index}-embed`
      );

      this.renderer.setProperty(embedContainer, 'innerHTML', embedCode);

      const script = this.renderer.createElement('script');
      script.src = workExample.scriptSrc;
      script.async = true;
      this.renderer.appendChild(this.el.nativeElement, script);

      this.monitorIframeLoad(embedContainer);
    });
  }

  private monitorIframeLoad(container: HTMLElement) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        const iframe = container.querySelector('iframe');
        if (iframe) {
          iframe.addEventListener('load', () => {
            this.embedLoadedCounter += 1;
            if (this.embedLoadedCounter === this.workExamples?.length) {
              this.loading = false;
              this.slideConfig = {
                ...this.slideConfig,
                swipe: true,
              };
            }
          });
          observer.disconnect();
        }
      });
    });
    observer.observe(container, { childList: true, subtree: true });
  }
}
