import React from 'react'

const Linebreak = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            scrollMarginLeft: 500,
        }}
    />
);

export default Linebreak;