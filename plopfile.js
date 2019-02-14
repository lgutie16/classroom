module.exports = function(plop) {
  // component generator
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{ properCase name}}/{{ properCase name}}.js',
        templateFile: 'plop-templates/component.hbs'
      },
      {
        type: 'add',
        path: 'src/{{ properCase name}}/{{ properCase name}}.test.js',
        templateFile: 'plop-templates/test.hbs'
      },
      {
        type: 'add',
        path: 'src/{{ properCase name}}/index.js',
        templateFile: 'plop-templates/index.hbs'
      },
      {
        type: 'add',
        path: 'src/{{ properCase name}}/{{ properCase name}}.css'
      },
      {
        type: 'modify',
        path: 'src/{{ properCase name}}/index.js',
        pattern: /\bname/g,
        template: '{{ properCase name}}'
      },
      {
        type: 'modify',
        path: 'src/{{ properCase name}}/{{ properCase name}}.js',
        pattern: /\bname/g,
        template: '{{ properCase name}}'
      },
      {
        type: 'modify',
        path: 'src/{{ properCase name}}/{{ properCase name}}.test.js',
        pattern: /\bname/g,
        template: '{{ properCase name}}'
      }
    ]
  })
}
