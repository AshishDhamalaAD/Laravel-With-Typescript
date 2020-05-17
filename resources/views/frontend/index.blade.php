<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/css/app.css', 'frontend') }}"
          rel="stylesheet" />
    <script src="{{ mix('/js/app.js', 'frontend') }}"
            defer></script>
</head>

<body>
    @routes('frontend')

    @inertia
</body>

</html>
