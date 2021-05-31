import React from 'react';
import { Component } from 'react';
import Config from '../Config';

export default class SiswaService extends Component {
  getAll() {
    return Config.get('/');
  }
}
