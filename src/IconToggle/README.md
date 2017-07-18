### Design & API Documentation

- [Material Design guidelines: Toggle buttons](https://material.io/guidelines/components/buttons.html#buttons-toggle-buttons)
- [Material Components Web](https://material.io/components/web/catalog/buttons/icon-toggle-buttons/)

### Usage

```
const IconToggle = require('./index').default;
initialState = {on: false};
<div>
  <IconToggle
    on={state.on}
    onChange={(e) => setState({ on: e.detail.isOn })}
    className="material-icons"
    dataToggleOn={{ label: 'Remove from favorites', content: 'favorite' }}
    dataToggleOff={{
      label: 'Add to favorites',
      content: 'favorite_border',
    }}
  >
    favorite_border
  </IconToggle>
  <span>{JSON.stringify(state)}</span>
</div>
```

```
const IconToggle = require('./index').default;
<doc-row>
  <IconToggle className="material-icons" onChange={() => {}}>favorite_border</IconToggle>
  <IconToggle primary className="material-icons" onChange={() => {}}>favorite_border</IconToggle>
  <IconToggle accent className="material-icons" onChange={() => {}}>favorite_border</IconToggle>
  <IconToggle disabled className="material-icons" onChange={() => {}}>favorite_border</IconToggle>
</doc-row>
```

**Using Font Awesome**

```
const IconToggle = require('./index').default;
<IconToggle data-icon-inner-selector=".fa" onChange={() => {}}>
  <i className="fa fa-star-o" aria-hidden="true"></i>
</IconToggle>
```