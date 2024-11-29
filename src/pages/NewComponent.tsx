import { Sheet } from 'react-modal-sheet';
import { useState } from 'react';
import OrderScreenv1 from './OrderScreenv1';

function NewComponent() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open sheet</button>

        <Sheet isOpen={isOpen} onClose={() => setOpen(false)}
            snapPoints={[0.5]}>
           <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>
                  {
                
                  
                  
                  }
                  </Sheet.Content>
                </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
    </div>
  );
}
export default NewComponent;