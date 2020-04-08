import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * The **Error 404** component page is to inform user of bad access pages
 */
export default function Error404 () {
  const { t } = useTranslation();
  return (
    <Fragment>
        <h1 className='display-5 error'>{t('component.error-pages.404.title')}</h1>
        <p>
          {t('component.error-pages.404.description')}
        </p>
      </Fragment>
  );
}
