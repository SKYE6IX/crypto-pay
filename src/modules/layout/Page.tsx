import Header from '../header-block/Header';
import HeroBlock from '../hero-block/HeroBlock';
import UsecasesBlock from '../usecases-block/UsecasesBlock';
import './styles/page.scss';
const Page = () => {
  return (
    <div className="page">
      <Header />
      <HeroBlock />
      <UsecasesBlock />
    </div>
  );
};

export default Page;
