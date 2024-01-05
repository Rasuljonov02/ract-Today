import React, { Component } from 'react';
import Left from './left';
import Right from './right';

export default class YourComponentName extends Component {
  render() {
    return (
      <div className="w-[100%] flex items-center">
        <Left />
        <Right />
      </div>
    );
  }
}
