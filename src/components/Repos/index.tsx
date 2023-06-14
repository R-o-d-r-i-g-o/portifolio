import React, { useState, useEffect } from 'react';
import moment from 'moment';
import * as S from './styles';
import axios from 'axios';

type RepoListProps = {
  id: number;
  name: string;
  language: string;
  html_url: string;
  updated_at: string;
};

const RepoList = () => {
  const [repos, setRepos] = useState([] as Array<RepoListProps>);
  const username = 'R-o-d-r-i-g-o';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get<Array<RepoListProps>>(`https://api.github.com/users/${username}/repos`);
        console.log(response);
        setRepos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div>
      <h2>Repositórios de {username}:</h2>
      <S.Container>
        {repos.map((repo) => (
          <S.RepoCard key={repo.id}>
            <S.Name>
              {repo.name}
            </S.Name>




            <li >{repo.language ?? 'teste'}</li> <br />
            <li >{moment(new Date(repo.updated_at)).format('YYYY-MM-DD')}</li> <br />
            {/* <li >{repo.html_url}</li> <br /> */}


            <S.Link>Visit repo</S.Link>
          </S.RepoCard>   
        ))}
      </S.Container>
    </div>
  );
};

export default RepoList;
