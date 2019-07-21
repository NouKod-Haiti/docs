/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <img src={`${baseUrl}img/undraw_code_review.svg`} width={500} alt="Project Logo" />
        <div className="inner" style={{marginTop: 50}}>
          <h2 className="projectTitle">
            {siteConfig.title}
            <small>{siteConfig.tagline}</small>
          </h2>
          <div className="section promoSection">
            <div className="promoRow">
              <div className="pluginRowBlock">
                <Button href={docUrl('welcome.html')}>Get Started</Button>
                <Button href={docUrl('contributing.html')}>How to Contribute</Button>
                {/* <Button href={docUrl('doc2.html')}>Example Link 2</Button> */}
              </div>
            </div>
          </div>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock
      align="center"
      contents={props.children}
      layout={props.layout}
    />
  </Container>
);

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Block background="light">
            {[
              {
                content:
                  'Each nlorenm adf ad aomdpfka dk , sDPINASFKV AS FPVKA SF.',
                image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
                imageAlign: 'right',
                title: 'Randomly Generated Theme Colors',
              },
            ]}
          </Block>
          <Block id="try">
            {[
              {
                content:
                  `To make your landing page more attractive, use illustrations! Check out
                  [**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. 
                  The illustrations you see on this page are from unDraw.`,
                image: `${baseUrl}img/undraw_monitor.svg`,
                imageAlign: 'left',
                title: 'Ramp up faster',
              },
            ]}
          </Block>
        </div>
      </div>
    );
  }
}

module.exports = Index;
