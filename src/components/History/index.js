import React from 'react';
import Button from '../Button';
import store from '../../store';
import { toggleHistory } from '../../actions/history';
import { updateExpression } from '../../actions/expression';

export const historyItemClickHandler = history => {
    updateExpression(history);
    toggleHistory();
}

export const History = () => (
    <section className={`history ${store.getState().showHistory ? 'visible' : ''}`}>
        <Button text="+" clickHandler={toggleHistory} buttonClass="toggle-close"/>
        {store.getState().history.map((mem, i) => (
            <Button key={i} buttonClass="block transparent"
                    text={mem} clickHandler={historyItemClickHandler}/>
        ))}
    </section>
);

export default History;