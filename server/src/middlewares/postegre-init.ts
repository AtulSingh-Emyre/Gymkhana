import { Client } from 'pg';

export const dbsConnection = async (): Promise<Client> => {
  const connectionString =
    'postgressql://postgres:root@localhost:5432/gymkhana';
  const client = new Client({ connectionString });
  await client.connect();
  return client;
};
