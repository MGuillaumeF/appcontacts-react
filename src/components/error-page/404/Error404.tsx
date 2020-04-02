import * as React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * The **Error 404** component page is to inform user of bad access pages
 */
export default function Error404 () {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <h1 className='display-5 error'>{t('pages.error.404.title')}</h1>
        <p>
          {t('pages.error.404.description')}
        </p>
      </React.Fragment>
  );
}
