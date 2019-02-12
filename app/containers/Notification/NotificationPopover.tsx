import React from 'react';
import { Popper, Popover } from '@material-ui/core';
import { Notification } from 'containers/Notification/Notification';

type NotificationComponent < P = {} > = React.SFC<P> | React.ComponentClass<P>;

/**
 * Notification popover TOGGLER props
 */
interface NotificationPopoverTogglerProps {
  onClick: (event) => void;
  unreadCount: number;
}

/**
 * Notification popover CONTENT props
 */
interface NotificationPopoverContentProps {
  notifications: Array<Notification>;
}

/**
 * Notification POPOVER props
 */
interface NotificationPopoverProps {
  TogglerComponent: NotificationComponent<NotificationPopoverTogglerProps>;
  ContentComponent: NotificationComponent<NotificationPopoverContentProps>;
  notifications?: Array<Notification>;
  unreadCount?: number;
}

interface NotificationPopoverState {
  anchorEl: any;
  allRead: boolean;
}

/**
 * NOTIFICATION POPOVER
 */
class NotificationPopover extends React.Component<
  NotificationPopoverProps,
  NotificationPopoverState
  > {
  state = {
    anchorEl: null,
    allRead: false,
  };

  constructor(props) {
    super(props);

    this.handleTogglerClick = this.handleTogglerClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleTogglerClick(event) {
    this.setState({
      anchorEl: event.currentTarget,
      allRead: true, // TODO: remove when redux store is connected
    });
  }

  handleClose() {
    this.setState({
      anchorEl: null,
    });
  }

  render() {
    const {
      TogglerComponent, ContentComponent, unreadCount, notifications,
    } = this.props;

    const { anchorEl } = this.state;
    const isOpen = Boolean(anchorEl);

    return (
      <div>
        <TogglerComponent
          unreadCount={this.state.allRead ? 0 : unreadCount} // TODO: remove allRead when redux store is connected
          onClick={this.handleTogglerClick}
        />
        <Popover
          open={isOpen}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <ContentComponent notifications={notifications} />
        </Popover>
      </div>
    );
  }
}

NotificationPopover.defaultProps = {
  unreadCount: 4, // TODO: change to 0 when redux store is connected
  notifications: [
    {
      text: 'YeahCoach published new Help case',
    },
    {
      text: 'Jirka replied to your message',
    },
  ],
};

// TODO: implement store connect
export { NotificationPopover, NotificationPopoverProps, NotificationPopoverState, NotificationPopoverContentProps, NotificationPopoverTogglerProps };
