import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';

/**
 * The **AboutUs** component page is to explain what is the application and who make it
 */
export default function AboutUs () {
  const { t } = useTranslation();
  return (
    <Container maxWidth="sm" className='padding-1'>
      <h1 className='display-5'>{t('pages.aboutUs.title')}</h1>
      <p className="lead">{t('pages.aboutUs.description')}</p>
      <p className="author">{t('pages.aboutUs.author')}</p>
      <p>Version {t('pages.aboutUs.version')}</p>
    </Container>
  );
}
