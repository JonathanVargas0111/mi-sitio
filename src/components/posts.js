import React, { Fragment } from 'react';

import { } from 'gatsby';

export default (props) => (
    <Fragment>
        <h2 className="text-3xl font-bold text-center text-blue-500 mt-12">{props.title}</h2>
        <div className="flex mt-8">
            {props.data.map((el, index) => (
                <props.card element={el} key={index}/>
            ))
            }
        </div>
    </Fragment>
) 