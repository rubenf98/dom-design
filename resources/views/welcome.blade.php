<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Dom Design</title>

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">



    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Raleway:ital,wght@0,300;0,500;0,700;0,900;1,900&display=swap"
        rel="stylesheet">
    <style>
        body {
            margin: 0;
            min-height: 100%;
            font-family: 'Raleway', sans-serif;
            scroll-behavior: smooth;
        }


        @-webkit-keyframes close-loader {
            0% {
                height: 100vh;
            }

            100% {
                height: 0vh;
            }
        }

        .full-page-loader {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100vw;
            background: black;
            box-sizing: border-box;
            overflow: hidden;


        }

        .logo-animation {
            width: 100px;
            -webkit-animation: remove-logo 1s forwards;
            animation: remove-logo 1s forwards;
            animation-delay: 5s;
        }

        @-webkit-keyframes remove-logo {
            0% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        @-webkit-keyframes animate-svg-stroke-1 {
            0% {
                stroke-dashoffset: 257.23577880859375px;
                stroke-dasharray: 257.23577880859375px
            }

            100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 257.23577880859375px
            }
        }

        @keyframes animate-svg-stroke-1 {
            0% {
                stroke-dashoffset: 257.23577880859375px;
                stroke-dasharray: 257.23577880859375px
            }

            100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 257.23577880859375px
            }
        }

        @-webkit-keyframes animate-svg-fill {
            0% {
                fill: transparent
            }

            100% {
                fill: rgb(255, 255, 255)
            }
        }

        @keyframes animate-svg-fill {
            0% {
                fill: transparent
            }

            100% {
                fill: rgb(255, 255, 255)
            }
        }

        .svg-elem-1 {
            -webkit-animation: animate-svg-stroke-1 3s ease-in-out 0s both, animate-svg-fill 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) 3s both;
            animation: animate-svg-stroke-1 3s ease-in-out 0s both, animate-svg-fill 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) 3s both
        }

        @-webkit-keyframes animate-svg-stroke-2 {
            0% {
                stroke-dashoffset: 250.3982696533203px;
                stroke-dasharray: 250.3982696533203px
            }

            100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 250.3982696533203px
            }
        }

        @keyframes animate-svg-stroke-2 {
            0% {
                stroke-dashoffset: 250.3982696533203px;
                stroke-dasharray: 250.3982696533203px
            }

            100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 250.3982696533203px
            }
        }

        .svg-elem-2 {
            -webkit-animation: animate-svg-stroke-2 3s ease-in-out 0.12s both, animate-svg-fill 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) 3.1s both;
            animation: animate-svg-stroke-2 3s ease-in-out 0.12s both, animate-svg-fill 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) 3.1s both
        }

        @-webkit-keyframes animate-svg-stroke-3 {
            0% {
                stroke-dashoffset: 691.30224609375px;
                stroke-dasharray: 691.30224609375px
            }

            100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 691.30224609375px
            }
        }

        @keyframes animate-svg-stroke-3 {
            0% {
                stroke-dashoffset: 691.30224609375px;
                stroke-dasharray: 691.30224609375px
            }

            100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 691.30224609375px
            }
        }

        .svg-elem-3 {
            -webkit-animation: animate-svg-stroke-3 3s ease-in-out 0.24s both, animate-svg-fill 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) 3.2s both;
            animation: animate-svg-stroke-3 3s ease-in-out 0.24s both, animate-svg-fill 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) 3.2s both
        }

        @-webkit-keyframes animate-svg-stroke-4 {
            0% {
                stroke-dashoffset: 633.9384155273438px;
                stroke-dasharray: 633.9384155273438px
            }

            100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 633.9384155273438px
            }
        }

        @keyframes animate-svg-stroke-4 {
            0% {
                stroke-dashoffset: 633.9384155273438px;
                stroke-dasharray: 633.9384155273438px
            }

            100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 633.9384155273438px
            }
        }

        .svg-elem-4 {
            -webkit-animation: animate-svg-stroke-4 3s ease-in-out 0.36s both, animate-svg-fill 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) 3.3s both;
            animation: animate-svg-stroke-4 3s ease-in-out 0.36s both, animate-svg-fill 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) 3.3s both
        }

        @-webkit-keyframes animate-svg-stroke-5 {
            0% {
                stroke-dashoffset: 327.5473327636719px;
                stroke-dasharray: 327.5473327636719px
            }

            100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 327.5473327636719px
            }
        }

        @keyframes animate-svg-stroke-5 {
            0% {
                stroke-dashoffset: 327.5473327636719px;
                stroke-dasharray: 327.5473327636719px
            }

            100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 327.5473327636719px
            }
        }

        .svg-elem-5 {
            -webkit-animation: animate-svg-stroke-5 3s ease-in-out 0.48s both, animate-svg-fill 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) 3.4s both;
            animation: animate-svg-stroke-5 3s ease-in-out 0.48s both, animate-svg-fill 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) 3.4s both
        }

        @-webkit-keyframes animate-svg-stroke-6 {
            0% {
                stroke-dashoffset: 318.1072998046875px;
                stroke-dasharray: 318.1072998046875px
            }

            100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 318.1072998046875px
            }
        }

        @keyframes animate-svg-stroke-6 {
            0% {
                stroke-dashoffset: 318.1072998046875px;
                stroke-dasharray: 318.1072998046875px
            }

            100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 318.1072998046875px
            }
        }

        .svg-elem-6 {
            -webkit-animation: animate-svg-stroke-6 3s ease-in-out 0.6s both, animate-svg-fill 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) 3.5s both;
            animation: animate-svg-stroke-6 3s ease-in-out 0.6s both, animate-svg-fill 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) 3.5s both
        }
    </style>
</head>

<body>
    <div id="index">

        <div class="full-page-loader">
            <svg class="logo-animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.84 308.93"
                width="219.83999633789062" height="308.92999267578125">
                <defs>
                    <style>
                        .cls-1 {
                            fill: rgb(255, 255, 255);
                            stroke: rgb(255, 255, 255);
                            stroke-miterlimit: 10;
                        }
                    </style>
                </defs>
                <g id="Camada_2" data-name="Camada 2">
                    <g id="Camada_1-2" data-name="Camada 1">
                        <path class="cls-1 svg-elem-1"
                            d="M96.7,291.94l.42-.43,1.22-1.31c.53-.57,1.07-1.18,1.64-1.85L68.44,265.47l-.36-.25L50.42,252.43l-4.15-3h-.05L19.15,229.76,13,225.35a80.41,80.41,0,0,0-7.78,15.82c-.55,1.49-1.08,3.12-1.64,5.06A41.32,41.32,0,0,0,16,262.66l3.2,2.34,2.2,1.59,26.91,19.49L67.49,300l.1.08c0,.05.12.09.18.14a1.54,1.54,0,0,1,.24.17c.4.28.82.57,1.29.87a40.58,40.58,0,0,0,9.39,4.62c.64-.36,1.27-.74,1.9-1.12A79.7,79.7,0,0,0,96.7,291.94Z">
                        </path>
                        <path class="cls-1 svg-elem-2"
                            d="M28,208,58,229.73l32,23.15,15,10.94,7.29,5.29A79.48,79.48,0,0,0,119,244.47a77.37,77.37,0,0,0,.49-7.9l-16.83-12.18L57.3,191.46A81.2,81.2,0,0,0,28,208Z">
                        </path>
                        <path class="cls-1 svg-elem-3"
                            d="M182.21.5V227.71a84.24,84.24,0,0,1-11.76,43.08,81,81,0,0,1-5.36,8l-.07.09c-.17.2-.33.4-.48.61l-.47.59a85.67,85.67,0,0,1-20.82,19,79.56,79.56,0,0,0,8.13-.9,60.46,60.46,0,0,0,6.43-1.29c1.2-.28,2.48-.63,4.12-1.11a81.33,81.33,0,0,0,17.28-7.45,76.61,76.61,0,0,0,8.31-5.56,81,81,0,0,0,31.82-64.23V.5Z">
                        </path>
                        <path class="cls-1 svg-elem-4"
                            d="M159.76,248.8c.27-1,.51-2.15.74-3.42V39.92h-37V235.69a80.84,80.84,0,0,1-.51,9.21A83.31,83.31,0,0,1,114.89,273a84.8,84.8,0,0,1-9.51,15.06c-.15.17-.29.35-.43.52s-.38.48-.53.64c-.7.88-1.44,1.72-2.16,2.53l-1,1.14c-.42.46-.84.91-1.27,1.36l-.42.44a84.06,84.06,0,0,1-15.49,12.6l.31.06c1.6.26,3.28.48,5.12.66,2.77.27,5.45.4,8,.4,1,0,2.13,0,3.31-.07.61-.14,1.22-.31,1.82-.47l.69-.18a79.82,79.82,0,0,0,8.88-3.11,76,76,0,0,0,8.42-4.1l.58-.31c1.06-.59,2-1.17,3-1.8A81.13,81.13,0,0,0,155.85,261,77.64,77.64,0,0,0,159.76,248.8Z">
                        </path>
                        <path class="cls-1 svg-elem-5"
                            d="M15.69,158.63c1.55-1.9,3.12-3.66,4.8-5.38a81.43,81.43,0,0,1,8.42-7.56,84.69,84.69,0,0,1,52.22-18.11h20.71V91.37H81.21A81.07,81.07,0,0,0,12,130.6a80.14,80.14,0,0,0-7.79,17.2c-.07.26-.15.51-.23.76s-.15.5-.23.77A84.2,84.2,0,0,0,.5,172.1v14.44q.21-.67.45-1.35A83.87,83.87,0,0,1,15.69,158.63Z">
                        </path>
                        <path class="cls-1 svg-elem-6"
                            d="M11.19,220.82c.37-.54.76-1.1,1.2-1.66s.74-1.07,1.21-1.68A84.65,84.65,0,0,1,56.11,187.6l1-.32c.55-.13,1.09-.28,1.63-.42.75-.2,1.5-.4,2.25-.58a85,85,0,0,1,20.21-2.42h20.6v-34.6H81.19l-1.6,0c-.58,0-1.15,0-1.73,0h0a79.31,79.31,0,0,0-27.65,6.15A80.47,80.47,0,0,0,13,186.94a75.41,75.41,0,0,0-4.79,8.67c-.93,2-1.8,4.07-2.59,6.16a79.37,79.37,0,0,0-3.46,12.14A70.62,70.62,0,0,0,1,221.35,77.51,77.51,0,0,0,.5,230v.4a41.05,41.05,0,0,0,1,9.33,84.28,84.28,0,0,1,9.34-18.4Z">
                        </path>
                    </g>
                </g>
            </svg>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Raleway:ital,wght@0,300;0,500;0,700;0,900;1,900&display=swap"
                rel="stylesheet">
        </div>




    </div>
</body>

</html>

<script>
    var script = document.createElement('script');
    script.src = "{{mix('js/app.js')}}";
    setTimeout(() => {
        document.getElementById('index').append(script);
    }, .6000);
    
</script>