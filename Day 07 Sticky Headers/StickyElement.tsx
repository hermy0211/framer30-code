import * as React from 'react';

const style: React.CSSProperties = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
}

export class StickyElement extends React.Component {
  render() {
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}