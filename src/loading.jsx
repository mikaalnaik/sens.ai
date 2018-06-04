import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
	<ReactLoading className="load" type={"spin"} color="#274C77" height={667} width={375} />
);

export default Loading;
