// 全体公開版のランキングの設定（身内版の js/ranking_config.js とは別。3D版_20261007/制作/全体公開へ.py は、このファイルを上書きしない）。
// 送り先：全体公開版用の Google Apps Script のウェブアプリの URL（…/exec）。空のままなら、オンラインには送らない（このブラウザの記録だけ）。
globalThis.HK_RANKING_URL = '';
// このブラウザの中の記録の置き場所：身内版（honekko.ranking.v1）と同じ github.io に置くので、分ける
globalThis.HK_RANKING_KEY = 'honekko.public.ranking.v1';
globalThis.HK_RANKING_VERSION = 'public-20261010';
