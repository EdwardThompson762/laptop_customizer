import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css';

//use page for updating features
updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };