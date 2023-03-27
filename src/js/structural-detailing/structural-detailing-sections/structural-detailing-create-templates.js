// import $ from 'jquery';
// // window.$ = window.jQuery = $;
// import 'slick-carousel'
import heroHBS from '../../../templates/hero.hbs';
import briefDescriptHBS from '../../../templates/herBIMAndVDCServices.hbs';
import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import faqHBS from '../../../templates/faq.hbs';
import sliderHBS from '../../../templates/ourProjectsSlider.hbs';
import ourProjectsSliderHBS from '../../../templates/ourProjectsSlider.hbs';
import {
    heroStructuralDetailing,
    briefDescriptStructuralDetailing,
    howStructuralDetailing,
    servicesStructuralDetailing,
    contactUsStructuralDetailing,
    addValueStructuralDetailing,
    projectStructuralDetailing,
} from './structural-detailing-data';
import { refs, refsCase } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { createFAQsection } from '../../common/createFaqSection';
import { toggleFaq } from '../../common/toggle-faq';

const ENDPOINT_STRUCTDETAILING= '/faq/structuralDetailing.json';
// Projects slider
// $(function(){
//     $('.section-projects__slider-item').slick({
//         arrows: false,
//         dots: true,
//         infinite: true,
//         fade: true,
//         cssEase: 'linear',
//         autoplay: true,
//         autoplaySpeed: 1500,
//         draggable: true,
//         swipe: true,
//         touchMove: true,
            // pauseOnFocus: false,
            // pauseOnHover: false,
        
//     });
// })


useTemplate(refs.hero, heroHBS, heroStructuralDetailing);
useTemplate(refs.herBIMAndVDC, briefDescriptHBS,  briefDescriptStructuralDetailing);
useTemplate(refs.howWeWork, howWeWorkHBS, howStructuralDetailing);
useTemplate(refs.services, servicesHBS, servicesStructuralDetailing);
useTemplate(refs.featuresForProjects, featuresForProjectsHBS, addValueStructuralDetailing);
useTemplate(refs.contactUs, contactUsHBS, contactUsStructuralDetailing);

// useTemplate(refsCase.sdSlider, ourProjectsSliderHBS, projectImg);
useTemplate(refs.slider, sliderHBS, projectStructuralDetailing);
const hidden = document.querySelector('.hidden');
const bimTextList = document.querySelector('.BIM__text-list');

hidden.style.display = 'none';
bimTextList.style.marginBottom = '0px';

createFAQsection(ENDPOINT_STRUCTDETAILING, refs.faq, faqHBS);
toggleFaq();
