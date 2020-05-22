import * as React from 'react';
import { formatNumber } from '../helpers/string';

export interface RepoListProps {
  name: string;
  description: string;
  watchersCount: number;
}

const RepoList: React.SFC<RepoListProps> = ({
  name,
  description,
  watchersCount
}) => {
  return (
    <div className="card border border-top-0 border-right-0 border-left-0 border-bottom">
      <div className="card-body">
        <h5 className="card-title d-flex flex-row">
          <span className="material-icons">book</span>
          {name}
        </h5>
        <p>{description}</p>
        <p className="card-title d-flex flex-row">
          <span className="material-icons">visibility</span> Watcher's
          Count: {formatNumber(watchersCount)}
        </p>
      </div>
    </div>
  );
}

export default RepoList;