import React from 'react';
import Todo_chap from "./todo_chap";
import Todo_ong from './todo_ong';

export default class Project extends React.Component {
    render() {
        return (
            <div className="w-[100%]">
                <Todo_chap />
                <Todo_ong />
            </div>
        );
    }
}
