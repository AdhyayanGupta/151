// Registering component in log-component.js
AFRAME.registerComponent('log', {
  // schema is an object that defines the property names, their types and defalut values
    schema: {
      message: {type: 'string', default: 'Hello, World!'}
    },
    init: function () {
        console.log(this.data.message);
      }
  });

