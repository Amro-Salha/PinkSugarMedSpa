import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Service,
  ServiceComponent,
} from 'libs/components/src/service/service.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'psm-services-page',
  templateUrl: './services-page.component.html',
  standalone: true,
  imports: [CommonModule, ServiceComponent, MatButtonModule, MatIconModule],
})
export class ServicesPageComponent {
  public services: Service[] = [
    {
      serviceName: 'VYBE Radio Frequency Microneedling',
      serviceDescription: [
        'South Korean Technology, robotically controlled premium handpiece',
        'Smooth and painless treatment with no downtime',
        'Stimulates collagen production using 36 gold-coated, insulated microneedles',
        'Benefits: Skin tightening, Pore size reduction, Eliminates wrinkles and fine lines, Promotes new skin cell generation',
        'Specialties: Scar and stretch mark revision, Wrinkle reduction, Facial and body contouring, Mommy tummy, breast lift, and acne scar revision',
        '3-5 treatments, spaced 4-6 weeks apart recommended',
        'FDA Approved',
      ],
      displayImage: 'assets/vybePhoto.webp',
      price: 750,
      workExamples: [
        {
          mediaSource: 'tiktok',
          scriptSrc: 'https://www.tiktok.com/embed.js',
          embedCode: `
          <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@pinksugarmedspa/video/7376376711627296046" data-video-id="7376376711627296046" style="max-width: 323px;min-width: 323px;" >
            <section></section>
          </blockquote>`,
          href: 'https://www.tiktok.com/@pinksugarmedspa/video/7376376711627296046',
        },
        {
          mediaSource: 'tiktok',
          scriptSrc: 'https://www.tiktok.com/embed.js',
          embedCode: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@pinksugarmedspa/video/7380048223567629614" data-video-id="7380048223567629614" style="max-width: 323px;min-width: 323px;" > <section></section> </blockquote>`,
          href: 'https://www.tiktok.com/@pinksugarmedspa/video/7380048223567629614',
        },
        {
          mediaSource: 'tiktok',
          scriptSrc: 'https://www.tiktok.com/embed.js',
          embedCode: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@pinksugarmedspa/video/7380444221620178218" data-video-id="7380444221620178218" style="max-width: 323px;min-width: 323px;" > <section> </section> </blockquote>`,
          href: 'https://www.tiktok.com/@pinksugarmedspa/video/7380444221620178218',
        },
        {
          mediaSource: 'tiktok',
          scriptSrc: 'https://www.tiktok.com/embed.js',
          embedCode: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@pinksugarmedspa/video/7366752222425730347" data-video-id="7366752222425730347" style="max-width: 323px;min-width: 323px;" > <section> </section> </blockquote>`,
          href: 'https://www.tiktok.com/@pinksugarmedspa/video/7366752222425730347',
        },
        {
          mediaSource: 'tiktok',
          scriptSrc: 'https://www.tiktok.com/embed.js',
          embedCode: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@pinksugarmedspa/video/7370427845799103787" data-video-id="7370427845799103787" style="max-width: 323px;min-width: 323px;" > <section> </section> </blockquote>`,
          href: 'https://www.tiktok.com/@pinksugarmedspa/video/7370427845799103787',
        },
      ],
    },
    {
      serviceName: 'SKINPEN Microneedling',
      serviceDescription: [
        'First FDA-cleared Microneedling device in the world',
        'Clinically proven to safely and effectively fight the appearance of wrinkles and acne scars',
        'Creates hundreds to thousands of “micro” skin punctures per second to stimulate the skins natural healing process',
        'Prompts tissue remodeling without causing scar tissue formation',
        'SkinPen is surrounded by a custom-designed BioSheath that guarantees sterility to prevent cross contamination between procedures.',
      ],
      displayImage: 'assets/skinPen.jpg',
      price: 350,
    },
    {
      serviceName: 'PRÉIME Luxury Medical Facial',
      serviceDescription: [
        'The worlds most advanced aesthetic facial device',
        'One of a kind luxury medical grade, 5 Tier facial rejuvenation system',
        'Dermafacial extraction via gentle pump, Microdermabrasion with oxygen pods and LED light, Microcurrent for muscle stimulation and facial contouring, Radiofrequency for skin tightening, Ultrasound for deep serum delivery',
        'European technology',
        'Clinically proven to result in healthier, tighter, smoother skin',
      ],
      displayImage: 'assets/priemePhoto.png',
      price: 399,
    },
    {
      serviceName: 'INLEI Lash Lift and Tint',
      serviceDescription: [
        'Clinically proven to provide natural lashes with extra thickness and curl',
        'Treatment guarantees increase in eyelash diameter by up to 24%',
        'Treatment guarantees increase in lash curl by up to 30%',
        'European Technology',
        'All InLei products are made in Italy',
      ],
      displayImage: 'assets/lashLiftPhoto.webp',
      price: 150,
    },
    {
      serviceName: 'INLEI Brow Lamination and Tint',
      serviceDescription: [
        'Fuller, thicker and healthier-looking brows',
        'Lift, Shape, Condition, Hold, and Shine',
        'European Technology',
        'All InLei products are made in Italy',
      ],
      displayImage: 'assets/browTintPhoto.webp',
      price: 150,
    },
  ];
}
