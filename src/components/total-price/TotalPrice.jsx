const TotalPrice = ({ price }) => {
	return <h2>Precio con IVA: {price + (price / 100) * 21}€</h2>;
};

export default TotalPrice;
