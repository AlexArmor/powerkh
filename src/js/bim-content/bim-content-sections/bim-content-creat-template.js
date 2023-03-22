// dataObjscts
import { heroContentObj } from './bim-content-data';
import { advantagesObj } from './bim-content-data';
import { contentCreationObj } from './bim-content-data';
import { objLibraryCreationObj } from './bim-content-data';
import { servicesCreationObj } from './bim-content-data';
import { contactUsContentObj } from './bim-content-data';
// templates HBS
import heroHBS from '../../../templates/hero.hbs';
import contentCreationHBS from '../../../templates/herBIMAndVDCServices.hbs';
import objLibraryCreationHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import advantagesHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import faqHBS from '../../../templates/faq.hbs';

import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { createFAQsection } from '../../common/createFaqSection';

const ENDPOINT_CONTENT = '/faq/bimContent.json';

useTemplate(refs.hero, heroHBS, heroContentObj);
useTemplate(refs.herBIMAndVDC, contentCreationHBS, contentCreationObj);
useTemplate(refs.howWeWork, objLibraryCreationHBS, objLibraryCreationObj);
useTemplate(refs.services, servicesHBS, servicesCreationObj);
useTemplate(refs.featuresForProjects, advantagesHBS, advantagesObj);
useTemplate(refs.contactUs, contactUsHBS, contactUsContentObj);
createFAQsection(ENDPOINT_CONTENT, refs.faq, faqHBS);
