import { Component } from 'react';

class GitRepositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [
        'appscentricsolutions',
        'ArrayListDemo',
        'ArrayListDemo01',
        'AzureDevopsDemoProductsApi',
        'CleanArchitecture',
        'ContosoUniversity',
        'CTS-Stage3-0122',
        'DelagatesDemo',
        'Demo01',
        'EventsDemo',
        'FISGlobal-0721',
        'GenericCollections',
        'GenericsDemo',
        'GitHubDemoApp',
        'GitTestFolder'
      ]
    };
  }

  render() {
    return (
      <div style={{ 
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '36px',
          marginBottom: '40px',
          fontWeight: 'bold'
        }}>
          Git repositories of User - TechieSyed
        </h1>
        
        <div>
          {this.state.repositories.map((repo, index) => (
            <div 
              key={index}
              style={{
                fontSize: '18px',
                color: '#666',
                padding: '10px',
                marginBottom: '5px'
              }}
            >
              {repo}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GitRepositories;
