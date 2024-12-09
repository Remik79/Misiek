<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gra w Kółko-krzyżyk</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Gra w Kółko-Krzyżyk</h1>
        <p>Twoje serce to <span id="player-symbol">❤️</span>, a AI używa <span id="ai-symbol">🖤</span>.</p>
        <div id="game-board">
            <div class="row">
                <div class="cell" data-cell="0"></div>
                <div class="cell" data-cell="1"></div>
                <div class="cell" data-cell="2"></div>
            </div>
            <div class="row">
                <div class="cell" data-cell="3"></div>
                <div class="cell" data-cell="4"></div>
                <div class="cell" data-cell="5"></div>
            </div>
            <div class="row">
                <div class="cell" data-cell="6"></div>
                <div class="cell" data-cell="7"></div>
                <div class="cell" data-cell="8"></div>
            </div>
        </div>
        <button id="reset-button">Zagraj ponownie</button>
        <p id="result"></p>
    </div>

    <script src="script.js"></script>
</body>
</html>

<a <div class="link-container">
  <a href="index.html" class="hidden-link">Pamiętaj, że cię kocham</a>
</div>

<style>
  .hidden-link {
    position: absolute; /* Link znajduje się poza widocznością */
    top: -9999px;
  }
</style>
