import { useState } from 'react';
import { Command, CommandList, CommandInput, CommandOption } from 'commandkey';

export default function CommandExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="bg-gray-400 text-gray-900 p-1 px-2 rounded hover:bg-gray-300">Open modal</button>

      <Command open={open} onClose={() => setOpen(false)}>
        <CommandInput placeholder="Search" />

        <CommandList>
          <CommandOption className="!mt-0">Apple</CommandOption>
          <CommandOption className="!mt-0">Orange</CommandOption>
          <CommandOption className="!mt-0">Pear</CommandOption>
        </CommandList>
      </Command>
    </>
  );
}
