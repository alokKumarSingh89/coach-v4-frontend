import React from 'react';

interface FilterProps {
  store: string;
  BaseComponent: React.ComponentType;
}

class Filter extends React.Component<FilterProps> {
  constructor(props) {
    super(props);
  }

  handleQueryReset() {
    // TODO: implement store query reset
  }

  handleQueryPersist() {
    // TODO: implement store query persists
  }

  render() {
    const { BaseComponent, query } = this.props;
    return (
      <BaseComponent
        onQueryReset={this.handleQueryReset}
        onQueryChange={this.handleQueryPersist}
        query={query}
      />
    );
  }
}

export { Filter, FilterProps };
