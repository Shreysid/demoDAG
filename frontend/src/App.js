// App.js
import React from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import './index.css';
import { ClearNodesButton } from './clearNode';
import TourManager from './components/TourManager';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '-20px'}}>
      <ClearNodesButton />
      <SubmitButton />
      <div style={{marginTop:'-20px', marginLeft:'10px'}}>
      <TourManager />
      </div>
      </div>
      
     
      
    </div>
  );
}

export default App;
