import React from 'react';
import Split from "react-split";
import ProblemDescription from './ProblemDescription/ProblemDescription';
type WorkSpaceProps = {
    
};

const WorkSpace:React.FC<WorkSpaceProps> = () => {
    
    return <Split className='split' minSize={0}>
   <ProblemDescription/>
     <div>Code editor will be here</div>
    </Split>
}
export default WorkSpace;