import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const AppProgressBar = ({goalPercent}) => {
    return <ProgressBar variant="success" now={goalPercent} />;
}

export default AppProgressBar;