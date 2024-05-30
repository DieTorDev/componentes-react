import { GlobalStyles } from './styles/GlobalStyles';
import SayHello from './components/say-hello/SayHello';
import CalculateSquareArea from './components/calculate-square-area/CalculateSquareArea';
import CalculateTriangleArea from './components/calculate-triangle-area/CalculateTriangleArea';
import CalculateCircleArea from './components/calculate-circle-area/CalculateCircleArea';
import CelsiusToFahrenheit from './components/celsius-to-fahrenheit/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/fahrenheit-to-celsius/FahrenheitToCelsius';
import TotalPrice from './components/total-price/TotalPrice';
import WriteMsg from './components/write-msg/WriteMsg';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<SayHello name='Diego' />
			<CalculateSquareArea side={10} />
			<CalculateTriangleArea base={10} height={10} />
			<CalculateCircleArea radius={10} />
			<CelsiusToFahrenheit celsius={20} />
			<FahrenheitToCelsius fahrenheit={68} />
			<TotalPrice price={100} />
			<WriteMsg
				name={'Diego'}
				material={'cartón'}
				size={'grande'}
				note={'Un saludo'}
			/>
		</>
	);
};

export default App;
