### Design & API Documentation

- [Material Design guidelines: Toggle buttons](https://material.io/guidelines/components/buttons.html#buttons-toggle-buttons)
- [Material Components Web](https://material.io/components/web/catalog/buttons/icon-toggle-buttons/)

### Usage

```
window.IconToggle = require('./index').default;
initialState = {checked: false};
<div>
  <IconToggle
    checked={state.checked}
    onChange={(e) => setState({ checked: e.target.checked })}
    className="material-icons"
    dataToggleOn={{ label: 'Remove from favorites', content: 'favorite' }}
    dataToggleOff={{
      label: 'Add to favorites',
      content: 'favorite_border',
    }}
  >
    favorite_border
  </IconToggle>
  <div>{JSON.stringify(state)}</div>
</div>
```

```
<DemoRow>
  <IconToggle className="material-icons" onChange={() => {}}>favorite_border</IconToggle>
  <IconToggle primary className="material-icons" onChange={() => {}}>favorite_border</IconToggle>
  <IconToggle accent className="material-icons" onChange={() => {}}>favorite_border</IconToggle>
  <IconToggle disabled className="material-icons" onChange={() => {}}>favorite_border</IconToggle>
</DemoRow>
```

**Using Font Awesome**

```
<IconToggle data-icon-inner-selector=".fa" onChange={() => {}}>
  <i className="fa fa-star-o" aria-hidden="true"></i>
</IconToggle>
```
