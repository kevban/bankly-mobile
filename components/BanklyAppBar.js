import * as React from 'react';
import { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { useSelector } from 'react-redux';

const BanklyAppBar = () => {
  const appBar = useSelector(store => store.appBar)
  return (<Appbar.Header
    mode='center-aligned'
    style={{ backgroundColor: '#7a6293' }}>
    <Appbar.Content title={appBar.title} color='white' />
  </Appbar.Header>)
};

export default BanklyAppBar;