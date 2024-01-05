import { createRoot } from 'react-dom/client';
import Main from './main';

import 'assets/style.css';

const root = createRoot(document.getElementById('root')!);

root.render(<Main />);
