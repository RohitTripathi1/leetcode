import React from 'react';
import Split from "react-split";
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/playground';
type WorkSpaceProps = {
    
};

const WorkSpace:React.FC<WorkSpaceProps> = () => {
    
    return <Split className='split' minSize={0}>
   <ProblemDescription/>
     <Playground/>
    </Split>
}
export default WorkSpace;