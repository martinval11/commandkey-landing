import { Command, CommandList, CommandInput, CommandOption } from 'commandkey';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-gray-400 text-gray-900 p-1 px-2 rounded hover:bg-gray-300"
      >
        Open customized modal
      </button>

      <Command
        open={open}
        onClose={() => setOpen(false)}
        className="bg-gray-800 border-gray-700"
      >
        <CommandInput
          placeholder="Search"
          className="bg-gray-800 border-gray-700"
        />

        <CommandList className="flex flex-row flex-wrap">
          <CommandOption className="!mt-0 w-1/3 transition hover:bg-gray-600">
            Apple
          </CommandOption>
          <CommandOption className="!mt-0 w-1/3 transition hover:bg-gray-600">
            Orange
          </CommandOption>
          <CommandOption className="!mt-0 w-1/3 transition hover:bg-gray-600">
            Pear
          </CommandOption>
          <CommandOption className="!mt-0 w-1/3 transition hover:bg-gray-600">
            Banana
          </CommandOption>
        </CommandList>
      </Command>
    </>
  );
}
