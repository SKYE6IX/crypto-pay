import Image from 'next/image';
import StepOneImageTop from './assets/step-one-image-top.webp';
import StepOneImageBottom from './assets/step-one-image-bottom.webp';
import StepTwoImage from './assets/step-two-image.webp';
import StepThreeImage from './assets/step-three-image.webp';
import './styles/instruction.scss';

const Instruction = () => {
  return (
    <section className="instructuon">
      <div className="instruction__header">
        <h2>
          Quick start using <span>Crypto Pay</span>
        </h2>
      </div>

      <div className="instruction__step instruction__step-one">
        <div className="instruction__step-header">
          <div className="instruction__step-header-number">
            <span>1</span>
          </div>
          <div className="instruction__step-header-text">
            <div className="instruction__step-header-title">
              <h3>Authorizing your app</h3>
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
        </div>

        <div className="instruction__step-image">
          <div className="instruction__step-image-one">
            <Image
              src={StepOneImageTop}
              alt="step-one-image"
              className="top-image"
            />
            <Image
              src={StepOneImageBottom}
              alt="step-one-image"
              className="bottom-image"
            />
          </div>
        </div>
      </div>

      <div className="instruction__step instruction__step-two">
        <div className="instruction__step-header">
          <div className="instruction__step-header-number">
            <span>2</span>
          </div>
          <div className="instruction__step-header-text">
            <div className="instruction__step-header-title">
              <h3>
                Crypto Pay <br />
                API Request
              </h3>
            </div>
            <div className="instruction__step-header-sub-title">
              <p>
                Requests are only served over HTTPS <br />
                To pass parameters use:
              </p>
            </div>
            <div className="instruction__step-header-steps-list">
              <p>&#8226; URL query string</p>
              <p>&#8226; application/json </p>
              <p>&#8226; application/x-www-form-urlencoded</p>
              <p>&#8226; multipart/form-data</p>
            </div>
          </div>
        </div>
        <div className="instruction__step-image">
          <div className="instruction__step-image-two">
            <Image src={StepTwoImage} alt="step-two-image" />
          </div>
        </div>
      </div>

      <div className="instruction__step instruction__step-three">
        <div className="instruction__step-header">
          <div className="instruction__step-header-number">
            <span>3</span>
          </div>
          <div className="instruction__step-header-text">
            <div className="instruction__step-header-title">
              <h3>Getting updates</h3>
            </div>
            <div className="instruction__step-header-sub-title">
              <p>
                There are two ways of receiving <br />
                updates for your app:
              </p>
            </div>
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
        <div className="instruction__step-image ">
          <div className="instruction__step-image-three">
            <Image src={StepThreeImage} alt="step-three-image" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Instruction;
