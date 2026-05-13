import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Modelagem Visual',
    Svg: require('@site/static/img/flow-logs-vpc-svgrepo-com.svg').default,
    description: (
      <>
        Crie fluxos de monitoramento utilizando nós e conexões visuais
      </>
    ),
  },
  {
    title: 'Geração Automática',
    Svg: require('@site/static/img/gui-management-svgrepo-com.svg').default,
    description: (
      <>
        Gere scripts automaticamente a partir dos fluxos modelados
      </>
    ),
  },
  {
    title: 'Monitoramento Interativo',
    Svg: require('@site/static/img/analytics-svgrepo-com.svg').default,
    description: (
      <>
        Monitore dispositivos locais e remotos de forma simples
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}