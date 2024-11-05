# VerticalTabs vertical tabs

Commonly used for storage and display of large blocks of content in horizontal areas, supports embedded tag format and rendering loop data format

## Import

```tsx
import { VerticalTabs } from '@nutui/nutui-react'
```

## Sample code

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Basic usage-simple mode

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Basic usage-card mode

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Basic usage - button mode

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Basic usage - smile curve

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Large number, scrolling operation

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Nested layout

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Nested layout 2

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## VerticalTabs

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | The value of the currently active tab panel | `number` \| `string` | `0` |
| defaultValue | Initialize the value of the active tab | `number` \| `string` | `0` |
| activeColor | Label selected color | `string` | `#1A1A1A` |
| activeType | Select the bottom display style Optional values `line`、`smile`、`simple`、`card`、`button`、`divider` | `line` \| `smile` \| `simple` \| `card` \| `button`\| `divider` | `line` |
| duration | Switch animation duration, unit ms 0 means no animation | `number` \| `string` | `300` |
| title | custom navigation area | `() => JSX.Element[]` | `-` |
| align | title alignment | `left` \| `right` | `-` |
| autoHeight | Auto height. When set to true, nut-tabs and nut-tabs\_\_content will change with the height of the current nut-tabpane. | `boolean` | `false` |
| tabStyle | tab bar style | `CSSProperties` | `{}` |
| onClick | Triggered when the label is clicked | `(index: string \| number) => void` | `-` |
| onChange | Triggered when the currently active tab changes | `(index: string \| number) => void` | `-` |

## VerticalTabs.Tabpane

### Props

| Property | Description | type | Default |
| --- | --- | --- | --- |
| title | title | `string` | `-` |
| value | tag Key , matching identifier, default is index value | `string` \| `number` | `-` |
| disabled | Whether to disable the label | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-tabs-titles-height | height of titles in horizontal direction | `44px` |
| \--nutui-tabs-titles-background-color | Tab title background color | `$color-background` |
| \--nutui-tabs-title-gap | Tab title margin | `0px` |
| \--nutui-tabs-titles-font-size | Tab title font size | `$font-size-base` |
| \--nutui-tabs-titles-item-min-width | Minimum width of horizontal titles | `50px` |
| \--nutui-tabs-titles-item-color | Tab titles font color | `$color-title` |
| \--nutui-tabs-titles-item-active-color | Tab selected titles font color | `$color-primary` |
| \--nutui-tabs-titles-item-active-font-weight | Tab selected titles font weight | `$font-weight-bold` |
| \--nutui-tabs-titles-item-active-font-size | Tab selected titles font size | `$font-size-l` |
| \--nutui-tabs-titles-item-active-background-color | Background color of active tab titles in horizontal direction | `$color-background-overlay` |
| \--nutui-tabs-tab-line-width | Horizontal active tab line width | `12px` |
| \--nutui-tabs-tab-line-height | Height of active tabs line in horizontal direction | `2px` |
| \--nutui-tabs-tab-line-color | Horizontal line color | `$color-primary` |
| \--nutui-tabs-line-bottom | Horizontal line distance | `15%` |
| \--nutui-tabs-line-border-radius | rounded corners for horizontal lines | `2px` |
| \--nutui-tabs-tab-line-opacity | Opacity of horizontal tabs | `1` |
| \--nutui-tabs-vertical-titles-width | Width of vertical titles | `100px` |
| \--nutui-tabs-vertical-titles-item-height | height of vertical titles | `40px` |
| \--nutui-tabs-vertical-tab-line-color | vertical line color | `linear-gradient(180deg, $color-primary 0%, rgba(#fa2c19, 0.15) 100%)` |
| \--nutui-tabs-vertical-tab-line-width | Vertical title line width | `3px` |
| \--nutui-tabs-vertical-tab-line-height | The height of the vertical title line | `12px` |
| \--nutui-tabs-tabpane-padding | Padding of the Tabpane content | `24px 20px` |
| \--nutui-tabs-tabpane-backgroundColor | BackgroundColor of the Tabpane content | `#fff` |
