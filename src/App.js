import React from 'react';
// import { Button, Link } from 'carbon-components-react';
// import { default as Api124 } from '@carbon/icons-react/lib/API--1/24';
// import Document24 from '@carbon/icons-react/lib/document/24';
// import IbmCloud24 from '@carbon/icons-react/lib/ibm-cloud/24';
// import Launch16 from '@carbon/icons-react/lib/launch/16';
// import LogoGithub24 from '@carbon/icons-react/lib/logo--github/24';
import Header from './components/Header';
import ServiceContainer from './components/ServiceContainer';
import useScript from './hooks/useScript';

const HEADER_TITLE = 'Watson Speech to Text';
const HEADER_DESCRIPTION =
  'IBM Watson Speech to Text is a cloud-native API that transforms voice into written text.';

export const App = () => {
  useScript(
    'https://cdn.jsdelivr.net/gh/watson-developer-cloud/watson-developer-cloud.github.io@master/analytics.js',
  );

  return (
    <div className="app-container">
      <Header
        description={HEADER_DESCRIPTION}
        title={HEADER_TITLE}
      />
      <ServiceContainer />
    </div>
  );
};

export default App;
