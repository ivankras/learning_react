import React from 'react';

const RenderListItem = props => (
    <div>
        <h3>{props.location.state.list_item.text}</h3>
        <h4>{props.location.state.list_item.num}</h4>
        <div>
            {
                props.location.state.list_item.bool
                ? <p>Boolean is true</p>
                : <p>Boolean is false</p>
            }
        </div>
    </div>
);

export default RenderListItem;