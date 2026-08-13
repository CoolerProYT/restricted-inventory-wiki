# How restrictions work

RestrictedInventory checks rules at the points where Minecraft normally validates placement and adds picked-up items.

## Manual placement

When a player tries to place a stack into a restricted slot, the item must match the configured item or tag. If the rule contains a component or NBT filter, that variant data must match as well.

## Pickups and automatic routing

Picked-up items try their eligible restricted slots first. If no matching restricted slot has room, Minecraft falls back to unrestricted inventory slots. A restriction therefore reserves a destination without preventing the player from collecting that item elsewhere when the reserved slot is full.

## Visual feedback

Empty restricted slots render a dimmed ghost preview. Tag rules cycle through tag members so the player can see examples of valid items. Hold **Tab** to display inventory indices when `showSlotIndex` is enabled.

## Rule priority

Each slot has at most one rule. A variant filter adds precision to its item or tag; it does not create a second independent rule. See [variant filters](/reference/component-filters) for the version-specific stored format.
