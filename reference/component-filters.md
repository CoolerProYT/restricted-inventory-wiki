# Variant filters

RestrictedInventory can restrict a slot to an exact item variant. This is useful when the item ID alone is too broad—for example, potions and enchanted books use additional data to distinguish their contents.

| Minecraft | Variant system | Config field |
| --- | --- | --- |
| 1.20.1 | Item NBT | `tag` |
| 1.21.1, 26.1.2, 26.2 | Data components | `components` |

## Use the editor

The safest workflow is:

1. Select the desired variant from the **Items** list.
2. Apply it to a slot. The editor carries the creative stack's variant data into the rule.
3. Middle-click the filled slot to inspect or change the NBT/components.
4. Save only after the editor's live validation accepts the data.

The item search includes tooltip text, so queries such as an enchantment or potion name can locate component variants.

## Minecraft 1.21.1 and newer

A component-aware entry uses this form:

```json
{
  "restrictedSlots": {
    "0": {
      "item": "minecraft:diamond_sword",
      "components": {
        "minecraft:example_component": "example_value"
      }
    }
  }
}
```

The `components` object uses Minecraft's serialized data-component representation. Exact keys and values depend on the Minecraft version and item.

## Minecraft 1.20.1

The 1.20.1 branch stores the same kind of restriction using item NBT under `tag`:

```json
{
  "restrictedSlots": {
    "0": {
      "item": "minecraft:diamond_sword",
      "tag": {
        "example_nbt_key": "example_value"
      }
    }
  }
}
```

Prefer selecting a real item variant in the config screen rather than writing either format from memory.

::: info Variant data must match
The configured filter is checked in addition to the item or tag. A stack with the right item but different filtered NBT or component values will not match.
:::

To remove variant matching while retaining the item/tag rule, middle-click the slot and clear the NBT or component object.
