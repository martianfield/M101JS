# Templates

To serve HTML files it is best to use templates.

Templates (by convention) reside in a `views` folder.

```shell
mkdir views
```

We need a template engine. A template engine needs to comply with requirements Express puts on us. To simplify that, we use the `consolidate` package.

```shell
npm install consolidate --save
```

```javascript
const eninges = require('consolidate');
```

We are going to use the [Nunjucks](http://mozilla.github.io/nunjucks/) templating engine. Install it:

```shell
npm install nunjucks --save
```

We then tell Express to register the `nunjucks` engine as the view engine for `.html` views:

```javascript
app.engine('html', engines.nunjucks)
```

Then we tell express the default extension to use when omitted:

```javascript
app.set('view engine', 'html');
```

and we let Express know where the views reside

```javascript
app.set('views', __dirname + '/views');
```

We can now send content to our template by using the `request.render()` method instead of the `.send()` method. Note how we can omit the extension of view, because we set it above.

```javascript
app.get('/', (req, res) => {
	res.render('index', {name:"Amelia Pond"});
})
```



Of course we still need a template in our views folder. Add index.html with following content:

```html
<!DOCTYPE html>
<html>
<head></head>
<body>
	<h1>Hello {{name}}</h1>
</body>
</html>
```


