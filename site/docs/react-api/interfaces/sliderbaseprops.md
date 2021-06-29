[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / SliderBaseProps

# Interface: SliderBaseProps

## Hierarchy

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>, ``"defaultChecked"`` \| ``"defaultValue"`` \| ``"onChange"``\>

  ↳ **`SliderBaseProps`**

## Table of contents

### Properties

- [disabled](sliderbaseprops.md#disabled)
- [innerRef](sliderbaseprops.md#innerref)
- [max](sliderbaseprops.md#max)
- [min](sliderbaseprops.md#min)
- [step](sliderbaseprops.md#step)
- [withInput](sliderbaseprops.md#withinput)

## Properties

### disabled

• `Optional` **disabled**: `boolean`

Whether the slider is disabled.

**`default`** false

#### Defined in

[packages/react/src/Slider/Slider.tsx:40](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Slider/Slider.tsx#L40)

___

### innerRef

• `Optional` **innerRef**: ``null`` \| `RefObject`<`HTMLDivElement`\> \| (`instance`: ``null`` \| `HTMLDivElement`) => `void`

The ref for Slider root.

#### Defined in

[packages/react/src/Slider/Slider.tsx:63](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Slider/Slider.tsx#L63)

___

### max

• `Optional` **max**: `number`

The maximum permitted value

**`default`** 100

#### Defined in

[packages/react/src/Slider/Slider.tsx:45](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Slider/Slider.tsx#L45)

___

### min

• `Optional` **min**: `number`

The minimum permitted value

**`default`** 0

#### Defined in

[packages/react/src/Slider/Slider.tsx:50](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Slider/Slider.tsx#L50)

___

### step

• `Optional` **step**: `number`

The stepping interval.

**`default`** 0

#### Defined in

[packages/react/src/Slider/Slider.tsx:55](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Slider/Slider.tsx#L55)

___

### withInput

• `Optional` **withInput**: `boolean`

Will render input if `withInput` is `true`.

#### Defined in

[packages/react/src/Slider/Slider.tsx:59](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Slider/Slider.tsx#L59)
