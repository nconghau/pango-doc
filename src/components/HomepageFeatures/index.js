import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Attract and increase conversion rate of potential customers at Event',
    Svg: require('@site/static/img/pangoCDP.1.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Attract and increase conversion rate of potential customers at Event',
    Svg: require('@site/static/img/pangoCDP.2.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Attract and increase conversion rate of potential customers at Event',
    Svg: require('@site/static/img/pangoCDP.1.svg').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))} */}
        <img src="https://pangocdp.com/wp-content/uploads/elementor/thumbs/pangoCDP.20230208115435.150-q1yka0g79fa11ykldcmsxbu5clcctca6b1uqx4nonw.jpg" />
      </div>
    </section>
  );
}
