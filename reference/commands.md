# Commands and permissions

RestrictedInventory provides one command:

```text
/restrictedinventory config
```

It opens the in-game restriction editor on the client.

## Permission behavior

| Mode | Who can run the command |
| --- | --- |
| Server-wide (`useClientRestriction: false`) | Administrators with permission level 4 |
| Per-player (`useClientRestriction: true`) | Every player |

The server updates command permissions when the common configuration reloads, so changing modes does not require manually re-granting access.

If the command is unavailable, verify the server's `useClientRestriction` value and your operator permission level.
