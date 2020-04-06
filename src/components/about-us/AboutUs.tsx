import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

/**
 * The **AboutUs** component page is to explain what is the application and who make it
 */
export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="sm" className='padding-1'>
      <Typography variant="h4" component="h2" color="textPrimary">
        {t('components.about-us.title')}
      </Typography>
      <Typography variant="body1" component="p" color="textSecondary">
        {t('components.about-us.description')}
      </Typography>
      <Typography variant="body1" component="p" color="textSecondary">
        {t('components.about-us.author')}
      </Typography>
      <Typography variant="body1" component="p" color="textSecondary">
        {t('components.about-us.version')}
      </Typography>
    </Container>
  );
}
