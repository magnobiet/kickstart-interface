<!DOCTYPE html>
<html lang="en" ng-app="app">
	<head>
		<meta charset="utf-8">
		<title><?php echo $_SERVER['REQUEST_URI']; ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootswatch/3.2.0/yeti/bootstrap.min.css">
		<style>

			html {
				position: relative;
				min-height: 100%;
			}
			body {
				padding-top: 60px;
				margin-bottom: 45px;
			}

			.footer {
				position: fixed;
				bottom: 0;
				width: 100%;
				background-color: #f5f5f5;
			}

			.footer > .container {
				padding: 15px 0 5px 0;
			}

		</style>
		<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.min.js"></script>
		<?php

			$directories = array();

			if ($root = opendir('.')) {

				$blacklist = array(

					'.',
					'..',

					'.htaccess',

					'assets',
					'views',
					'data',

					'404.html',
					'index.php',

					'humans.txt',
					'robots.txt',

					'favicon.ico',
					'tile.png',
					'tile-wide.png',
					'apple-touch-icon-precomposed.png',

					'browserconfig.xml',

				);

				while (false !== ($file = readdir($root))) {

					if (!in_array($file,
						$blacklist)) {
						array_push($directories, $file);
					}

				}

				closedir($root);

			}

		?>
		<script>

			var app = angular.module('app', []);

			app.controller('MainController', function ($scope) {
				$scope.directories = [
					<?php
						foreach ($directories as $directory) {
							echo "{'name': '$directory' },";
						}
					?>
				];
			});

		</script>
	</head>

	<body ng-controller="MainController">

		<div class="navbar navbar-default navbar-fixed-top" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="//<?php echo $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']; ?>"><?php echo $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']; ?></a>
				</div>
			</div>
		</div>

		<div class="container">

			<form action="#" role="form">

				<fieldset>

					<div class="form-group">
						<div class="input-group">
							<div class="input-group-addon"><span class="glyphicon glyphicon-search"></span></div>
							<input type="text" class="form-control" placeholder="Search" ng-model="query" focus>
						</div>
					</div>

				</fieldset>

			</form>

			<div class="table-responsive">
				<table class="table table-striped table-bordered table-hover">
					<thead>
						<tr>
							<th>Index of /</th>
						</tr>
					</thead>
					<tbody>
						<tr ng-repeat="directory in directories | filter:query">
							<td>
								<a href="{{directory.name}}" target="_blank"><span class="glyphicon glyphicon-folder-open"></span>&nbsp;&nbsp;{{directory.name}}</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

		</div>

		<div class="footer">
			<div class="container">
				<p class="text-muted text-center"><?php echo $_SERVER['SERVER_SOFTWARE']; ?></p>
			</div>
		</div>

	</body>
</html>
