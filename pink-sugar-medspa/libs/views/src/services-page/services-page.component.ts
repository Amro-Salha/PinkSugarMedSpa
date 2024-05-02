import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from 'libs/components/src/service/service.component';

export interface Service {
  serviceName: string;
  serviceDescription: string[];
  comingSoon?: boolean;
  displayImage: string;
  price?: number;
}

@Component({
  selector: 'psm-services-page',
  templateUrl: './services-page.component.html',
  standalone: true,
  imports: [CommonModule, ServiceComponent],
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
      price: 850,
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
