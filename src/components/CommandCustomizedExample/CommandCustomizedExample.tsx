import { Command, CommandList, CommandInput, CommandOption } from 'commandkey';
import { useState } from 'react';

import styles from './styles.module.css';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open customized modal</button>

      <Command
        open={open}
        onClose={() => setOpen(false)}
        className={styles.commandContainer}
      >
        <CommandInput placeholder="Search" className={styles.commandInput} />

        <CommandList className={styles.commandList}>
          <CommandOption className={styles.commandOption}>Apple</CommandOption>
          <CommandOption className={styles.commandOption}>Orange</CommandOption>
          <CommandOption className={styles.commandOption}>Pear</CommandOption>
          <CommandOption className={styles.commandOption}>Banana</CommandOption>
        </CommandList>
      </Command>
    </>
  );
}
