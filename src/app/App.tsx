import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';

import { AppRouter } from './providers/routers';
import { Navbar } from 'widgets/Navbar';

function App() {
	const { theme } = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
		</div>
	);
}

export default App;
