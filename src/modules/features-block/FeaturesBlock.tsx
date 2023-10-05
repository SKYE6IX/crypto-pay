import Currencies from './components/currencies/Currencies';
import Commission from './components/commision/Commision';
import Exchange from './components/exchange/Exchange';
import Stat from './components/stat/Stat';
import Verification from './components/verification/Verification';
import Anonymous from './components/anonymous/Anonymous';
import './styles/features-block.scss';

const FeatureBlock = () => {
  return (
    <section className="feature-block">
      <div className="feature-block__top">
        <Currencies />
      </div>
      <div className="feature-block__middle">
        <div className="feature-block__middle-wrapper">
          <Commission />
          <Exchange />
        </div>
        <Stat />
      </div>
      <div className="feature-block__last">
        <Verification />
        <Anonymous />
      </div>
    </section>
  );
};

export default FeatureBlock;
