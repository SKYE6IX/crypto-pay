import Header from '../header-block/Header';
import HeroBlock from '../hero-block/HeroBlock';
import './styles/page.scss';
const Page = () => {
  return (
    <div className="page">
      <Header />
      <HeroBlock />
    </div>
  );
};

export default Page;
