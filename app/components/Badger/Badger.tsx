import Badge, { BadgeProps } from '@material-ui/core/Badge';
import { Fragment } from 'react';

interface BadgerProps extends BadgeProps {}

/**
 * Enhacer for MuiBadge component
 * ---
 * 1. Adds possibility to render children element only when badgeContent is false
 */
const Badger: React.SFC<BadgerProps & { children: any }> = (props) => {
  const { badgeContent, children, ...others } = props;

  if (!badgeContent) return children;

  return (
    <Fragment>
      <Badge badgeContent={badgeContent} {...others}>
        {children}
      </Badge>
    </Fragment>
  );
};

export { Badger, BadgerProps };
