import React from 'react';
import { Spin } from 'antd';

export const Loader = () => {
  return(
    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0}}>
      <Spin spinning={true}/>
    </div>
  )
}