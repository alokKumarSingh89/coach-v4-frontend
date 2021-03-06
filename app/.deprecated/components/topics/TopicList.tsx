import { inject, observer } from 'mobx-react';

import ActiveLink from '../common/ActiveLink';
import CreateTopicForm from './CreateTopicForm';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { Store } from '../../lib/store';
import Tooltip from '@material-ui/core/Tooltip';
import TopicActionMenu from './TopicActionMenu';

// TODO: consider removing Paper component from TopicList and DiscussionList

const stylePaper = {
  margin: '8px 4px',
  padding: '5px',
};

const styleLoadingDiv = {
  padding: '20px',
};

class TopicList extends React.Component<{ store: Store }> {
  state = {
    addPublicTopicOpen: false,
  };

  handleAddPublicTopicClose = () => {
    this.setState({ addPublicTopicOpen: false });
  };

  addPublicTopic = event => {
    event.preventDefault();
    this.setState({ addPublicTopicOpen: true });
  };

  render() {
    const { store } = this.props;

    const { currentTeam } = store;

    if (!currentTeam) {
      return <div style={styleLoadingDiv}>No team is found.</div>;
    }

    if (!currentTeam.isInitialTopicsLoaded) {
      return <div style={styleLoadingDiv}>loading Topics ...</div>;
    }

    return (
      <div style={{ padding: '0px 5px 0px 0px' }}>
        <p style={{ display: 'inline', fontSize: '14px' }}>Topics</p>
        <Tooltip title="Add new Topic" placement="right" disableFocusListener disableTouchListener>
          <a onClick={this.addPublicTopic} style={{ float: 'right', padding: '0px 10px' }}>
            <i className="material-icons" color="action" style={{ fontSize: 14, opacity: 0.7 }}>
              add_circle_outline
            </i>{' '}
          </a>
        </Tooltip>
        <ul>
          {currentTeam.topics.map(
            t =>
              t.slug !== 'projects' ? (
                <Paper
                  key={t._id}
                  style={stylePaper}
                  elevation={currentTeam.currentTopicSlug === t.slug ? 8 : 2}
                >
                  <li key={t._id}>
                    <div style={{ display: 'inline' }}>
                      <ActiveLink
                        linkText={t.name}
                        href={`/topics/detail?teamSlug=${t.team.slug}&topicSlug=${t.slug}`}
                        as={`/team/${t.team.slug}/t/${t.slug}`}
                        highlighterSlug={`/team/${t.team.slug}/t/${t.slug}`}
                      />
                    </div>
                    <TopicActionMenu topic={t} />
                  </li>
                </Paper>
              ) : null,
          )}
        </ul>
        <CreateTopicForm
          open={this.state.addPublicTopicOpen}
          onClose={this.handleAddPublicTopicClose}
        />
      </div>
    );
  }
}

export default inject('store')(observer(TopicList));
