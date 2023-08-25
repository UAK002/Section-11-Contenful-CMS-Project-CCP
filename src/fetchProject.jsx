import { createClient } from 'contentful';

const client = createClient({
  space: 'zs6fiuytsh7z',
  environment: 'master',
  accessToken: 'hB5c2nLddXWwaxslQZjWESQspm6UekZCs-F_bFesddo',
});

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response));
