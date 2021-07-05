# Juster SDK

## Quickstart

Begin with installing lerna tool if not yet (make sure you have **yarn** installed):

```
yarn global add lerna
```

In order to install all the dependencies (for all packages) with cross-links:

```
lerna bootstrap
```

Finally, build all packages/examples:

```
lerna run build
```

Start React demo UI:

```
lerna run demo
```
