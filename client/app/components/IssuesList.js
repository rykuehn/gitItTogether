import React, {Component} from 'react';
import PreviewContainer from './PreviewContainer';

class IssuesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={styles.container}>
        {this.props.issues.slice(0, 25).map(issue => {
          return <PreviewContainer issue={issue} key={issue.id} />
        })}
      </div>
    )
    
  }
}

const styles ={
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '130vmin',
    border: '1px solid red',
    justifyContent: 'flex-start',
    alignItems: 'space-around',
    flexDirection: 'column'
  }
}
export default IssuesList;