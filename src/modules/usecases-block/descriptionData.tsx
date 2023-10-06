import UsecasesImgOne from './assets/usecases-img-one.svg';
import UsecasesImageTwo from './assets/usecases-img-two.svg';
import UsecasesImageThree from './assets/usecases-img-three.svg';

interface DescriptionData {
  image: any;
  title: JSX.Element;
  base_text: JSX.Element;
  pagination_number: string;
}

export const descriptionData: DescriptionData[] = [
  {
    pagination_number: '01',
    image: UsecasesImgOne,
    title: (
      <h2>
        Instant
        <br />
        Auto Sales:
        <br />
        <span> Boost conversion</span>
      </h2>
    ),
    base_text: (
      <p>
        Immediately deliver digital products
        <br /> and services to your users.
      </p>
    ),
  },
  {
    pagination_number: '02',
    image: UsecasesImageTwo,
    title: (
      <h2>
        Channels
        <br />
        integration:
        <br />
        <span> Seamless access</span>
      </h2>
    ),
    base_text: (
      <p>
        Automatically unlock exclusive
        <br /> content to your users.
      </p>
    ),
  },
  {
    pagination_number: '03',
    image: UsecasesImageThree,
    title: (
      <h2>
        Endless
        <br />
        customization:
        <br />
        <span> with Webhooks</span>
      </h2>
    ),
    base_text: (
      <p>
        Receive successful payment notifications in
        <br /> real-time. Integrate to any scenario of your service.
      </p>
    ),
  },
];
