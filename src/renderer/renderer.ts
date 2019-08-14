import dva from 'dva';
import { createHashHistory } from 'history';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({ history: createHashHistory() });

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('../models/global').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#app');
