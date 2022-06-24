<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @keyframes lala {
            from{
                background: #F00; 
            }
            50%{
                background: #00F;
            }
            to{
                background: #F00;
            }
        }
        .coco{
            width: 100px;
            height: 100px;
            background: #F00;
            animation: infinite lala 1s;
        }
    </style>
</head>
<body>
    <div class="coco"></div>
</body>
</html>
