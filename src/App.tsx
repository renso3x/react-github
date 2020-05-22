import React, { useState } from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchInput from './components/SearchInput';
import RepoList from './components/RepoList';
import Spinner from './components/Spinner';
import Header from './components/Header';

import { searchRepository } from './services/api';

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      const repos = await searchRepository(query);
      setRepositories(repos.data.items);
      setLoading(false);
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Container className="themed-container" fluid="md">
      <Header
        title="Github API"
        description="You may search a repository here. I am using the api of github to make an api integration."
      />
      <SearchInput
        onSearchInput={handleSearch}
      />
      <main>
        <Spinner isLoading={isLoading} />
        {repositories.map((repo: any) => {
          return (
            <RepoList
              name={repo.name}
              description={repo.description}
              watchersCount={repo.watchers_count}
            />
          )
        })}
      </main>
    </Container>
  );
}

export default App;
