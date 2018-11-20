The base label component that can be used to create arbitrary textual labels.

A simple default label.
```jsx
<Label>Text</Label>
```

Labels can take a `backgroundColor` to configure the display of the label.  It
can either be a theme color or a CSS color.
```jsx
<Label backgroundColor="red.medium">red.medium</Label>
```

```jsx
<Label backgroundColor="#2222dd">#2222dd</Label>
```

Labels have a limited length before they will be truncated. The full label
text is available as a tooltip on hover.
```jsx
<Label>A really long label name</Label>
```
