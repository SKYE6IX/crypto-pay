import Image from 'next/image';
import StepOneImage from './assets/step-one-image.svg';
import StepTwoImage from './assets/step-two-image.svg';
import StepThreeImage from './assets/step-three-image.svg';
import './styles/insruction.scss';

const Insruction = () => {
  return (
    <section className="instructuon">
      <div className="instruction__header">
        <h2>
          Quick start using <span>Crypto Pay</span>
        </h2>
      </div>

      <div className="instruction__step instruction__step-one">
        <div className="instruction__step-header">
          <div className="instruction__step-header-head">
            <div className="instruction__step-header-number">
              <span>1</span>
            </div>
            <div className="instruction__step-header-title">
              <h3>Authorizing your app</h3>
            </div>
          </div>

          <div className="instruction__step-header-steps-list">
            <p>
              1. Open <span>@CryptoBot</span>
            </p>
            <p>
              2. Go to <span>Crypto Pay</span>
            </p>
            <p>
              3. Tap <span>Create App</span>
            </p>
            <p>
              4. Get <span>API Token</span>
            </p>
          </div>
        </div>
        <div className="instruction__step-image">
          <Image src={StepOneImage} alt="step-one-image" />
        </div>
      </div>

      <div className="instruction__step instruction__step-two">
        <div className="instruction__step-header">
          <div className="instruction__step-header-head">
            <div className="instruction__step-header-number">
              <span>2</span>
            </div>
            <div className="instruction__step-header-title">
              <h3>Crypto Pay API Request</h3>
            </div>
            <div className="instruction__step-header-sub-title">
              <p>
                Requests are only served over HTTPS <br />
                To pass parameters use:
              </p>
            </div>
          </div>
          <div className="instruction__step-header-steps-list">
            <p>&#8226; URL query string</p>
            <p>&#8226; application/json </p>
            <p>&#8226; application/x-www-form-urlencoded</p>
            <p>&#8226; multipart/form-data</p>
          </div>
        </div>
        <div className="instruction__step-image">
          <Image src={StepTwoImage} alt="step-two-image" />
        </div>
      </div>

      <div className="instruction__step instruction__step-three">
        <div className="instruction__step-header">
          <div className="instruction__step-header-head">
            <div className="instruction__step-header-number">
              <span>3</span>
            </div>
            <div className="instruction__step-header-title">
              <h3>Getting updates</h3>
            </div>
            <div className="instruction__step-header-sub-title">
              <p>
                There are two ways of receiving <br />
                updates for your app:
              </p>
            </div>
          </div>

          <div className="instruction__step-header-body">
            <div className="instruction__step-header-steps-list">
              <p>
                <span>&#8226; getInvoices</span> method to get a list of created{' '}
                <br />
                invoices.
              </p>
              <p>
                <span>&#8226; Webhooks</span> to receive updates in realtime.
              </p>
            </div>
          </div>
        </div>
        <div className="instruction__step-image">
          <Image src={StepThreeImage} alt="step-three-image" />
        </div>
      </div>
    </section>
  );
};
export default Insruction;
