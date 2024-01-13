import { Command, CommandList, CommandInput, CommandOption } from 'commandkey';
import styles from './styles.module.css';
import { useState } from 'react';

export default function CommandExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open animated modal</button>

      <Command
        open={open}
        onClose={() => setOpen(false)}
        className={styles.animatedCommand}
      >
        <CommandInput placeholder="Search" />

        <CommandList>
          <CommandOption className={styles.commandButton}>Apple</CommandOption>
          <CommandOption className={styles.commandButton}>Orange</CommandOption>
          <CommandOption className={styles.commandButton}>Pear</CommandOption>
        </CommandList>
      </Command>
    </>
  );
}
