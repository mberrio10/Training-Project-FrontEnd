import React from 'react';

class Calendar extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        let numbers = [0, 1, 2];
        let listItems = [];
        listItems = numbers.map((number, index) => {
            <li key={index}>
                {number}
            </li>;
            });
        console.log(listItems);
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default Calendar;