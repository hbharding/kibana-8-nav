import React from 'react';
import Helmet from 'react-helmet';
import {
  EuiBreadcrumb,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
} from '@elastic/eui';
import Layout from '../components/layout';
// @ts-ignore
import home_img from '../images/home.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Home',
  },
];

export default () => (
  <Layout chrome={{ breadcrumbs }}>
    <Helmet>
      <title>Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiPageBody>
        <EuiPageHeader
          className="euiPageHeader--restrictWidth"
          style={{ padding: 32 }}>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Welcome to the Elastic stack!</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent className="euiPageContent--restrictWidth">
          <EuiPageContentBody>
            <img
              className="pageScreenshot pageScreenshot--responsive"
              alt="Elastic home page"
              width={1212}
              src={home_img}
            />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  </Layout>
);