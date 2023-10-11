import Header from '../header-block/Header';
import HeroBlock from '../hero-block/HeroBlock';
import UsecasesBlock from '../usecases-block/UsecasesBlock';
import FeatureBlock from '../features-block/FeaturesBlock';
import Insruction from '../insruction-block/Instruction';
import ApiBlock from '../api-block/ApiBlock';
import CommunityBlock from '../community-block/CommunityBlock';
import Footer from '../footer-block/Footer';
import './styles/page.scss';

const Page = () => {
  return (
    <div className="page">
      <Header />
      <HeroBlock />
      <UsecasesBlock />
      <FeatureBlock />
      <Insruction />
      <ApiBlock />
      <CommunityBlock />
      <Footer />
    </div>
  );
};

export default Page;
