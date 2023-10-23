'use client';
import { Element } from 'react-scroll';
import Header from '../header-block/Header';
import HeroBlock from '../hero-block/HeroBlock';
import UsecasesBlock from '../usecases-block/UsecasesBlock';
import FeatureBlock from '../features-block/FeaturesBlock';
import Instruction from '../instruction-block/Instruction';
import ApiBlock from '../api-block/ApiBlock';
import CommunityBlock from '../community-block/CommunityBlock';
import Footer from '../footer-block/Footer';
import './styles/page.scss';

const Page = () => {
  return (
    <div className="page">
      <Header />
      <HeroBlock />
      <Element name="use_cases">
        <UsecasesBlock />
      </Element>
      <Element name="features">
        <FeatureBlock />
      </Element>
      <Element name="how_to_start">
        <Instruction />
      </Element>
      <ApiBlock />
      <CommunityBlock />
      <Footer />
    </div>
  );
};

export default Page;
