import { DraggableNode } from './draggableNode';
import './index.css';

export const PipelineToolbar = () => {

    return (
       <div> 
        <div style={{ padding: '30px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type="Node" label="Node" />
                <DraggableNode type="Start" label="Start" />
                <DraggableNode type="End" label="End" />
            </div>
        </div>
        </div>
    );
};
