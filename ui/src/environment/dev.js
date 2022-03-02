import environment from './base';

const baseApi = 'http://localhost:4000';
const env = environment(baseApi);

const data = {
    ...env,
    isMock: true,
};

export default data;