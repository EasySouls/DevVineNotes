import { useQueries, useQuery, useQueryClient } from '@tanstack/react-query';
import { UserModel } from '../app/models/user.model';
import axios from 'axios';
import { API_URL } from '../app/constants';

const Home = () => {
  const content = (
    <section className="bg-slate-400">
      <main></main>
    </section>
  );
  return content;
};

export default Home;
