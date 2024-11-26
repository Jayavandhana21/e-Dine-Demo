import { Sheet } from 'react-modal-sheet';
import { useState } from 'react';

function NewComponent() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open sheet</button>

        <Sheet isOpen={isOpen} onClose={() => setOpen(false)}
            snapPoints={[0.5]}>
           <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>{/*Yoursheetcontentgoeshere*/}</Sheet.Content>
                </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
    </div>
  );
}
export default NewComponent;