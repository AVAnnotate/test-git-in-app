import * as git from 'isomorphic-git';
import LightningFS from '@isomorphic-git/lightning-fs';
import http from 'isomorphic-git/http/web';
const fs = new LightningFS('fs');
const dir = '/test';

git
  .clone({
    fs,
    http,
    dir,
    url: 'https://github.com/',
    corsProxy: 'https://cors.isomorphic-git.org',
  })
  .then(console.log);

export const GitClone = () => {
  return <div>Cloning!</div>;
};
