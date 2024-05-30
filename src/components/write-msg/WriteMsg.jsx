const WriteMsg = ({ name, material, size, note }) => {
	const msg = `${name} ha pedido una caja de ${material} de tamaño ${size}. ${note}`;
	return <h2>{msg}</h2>;
};

export default WriteMsg;
