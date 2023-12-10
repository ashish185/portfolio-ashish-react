```js
const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity, //It will stop after 2sec duration if we don't provide repeat,
      repeatType: 'mirror' //if it goes to left then it will not over.
    },
  },
};

<motion.div variants={textVariant} animate="scrollButton">
```