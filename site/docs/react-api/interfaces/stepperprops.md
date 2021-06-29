[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / StepperProps

# Interface: StepperProps

## Hierarchy

- [`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>

  ↳ **`StepperProps`**

## Table of contents

### Properties

- [children](stepperprops.md#children)
- [activeStep](stepperprops.md#activestep)

## Properties

### children

• **children**: `ReactNode`

Two or more `<Step />` components.

#### Overrides

NativeElementPropsWithoutKeyAndRef.children

#### Defined in

[packages/react/src/Stepper/Stepper.tsx:19](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Stepper/Stepper.tsx#L19)

___

### activeStep

• `Optional` **activeStep**: `number`

Set the active step (zero based index) and set other `<Step />` to completed or disabled depending on index.
Set to -1 to disable all the steps.

**`default`** -1

#### Defined in

[packages/react/src/Stepper/Stepper.tsx:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Stepper/Stepper.tsx#L15)
