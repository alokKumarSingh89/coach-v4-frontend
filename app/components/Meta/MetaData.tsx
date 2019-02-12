import Head from 'next/head';
import { ComponentType } from 'react';

interface MetaDataProps {
  title: string;
  titleSuffix?: string;
  description?: string;
  section?: string;
  icon?: ComponentType;
}

/**
 * Meta data
 */
const MetaData: React.SFC<MetaDataProps> = (props) => {
  let { title, titleSuffix, description } = props;

  if (titleSuffix) {
    title += ` | ${titleSuffix}`;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

MetaData.defaultProps = {
  title: 'YeahCoach',
  titleSuffix: 'YeahCoach.com',
  description: 'YeahCoach is the first system of direct help and prosperity.',
};

/**
 * Exports
 */
export { MetaData, MetaDataProps };
